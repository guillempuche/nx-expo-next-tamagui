import AsyncStorage from '@react-native-async-storage/async-storage'
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from '@react-navigation/native'
import type {
	ThemeProviderProps,
	useThemeSetting as next_useThemeSetting,
} from '@tamagui/next-theme'
import { StatusBar } from 'expo-status-bar'
import {
	createContext,
	useContext,
	useEffect,
	useLayoutEffect,
	useMemo,
	useState,
} from 'react'
import { AppState, type ColorSchemeName, useColorScheme } from 'react-native'
export const ThemeContext = createContext<
	(ThemeProviderProps & { current?: string | null }) | null
>(null)

// type ThemeName = 'light' | 'dark' | 'system';
enum ThemeName {
	light = 'light',
	dark = 'dark',
	system = 'system',
}

export const UniversalThemeProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const [current, setCurrent] = useState<ThemeName>(ThemeName.system)
	const systemTheme = useNonFlickeringColorScheme()

	useLayoutEffect(() => {
		async function main() {
			const persistedTheme = await AsyncStorage.getItem('@preferred_theme')
			if (persistedTheme) {
				setCurrent(persistedTheme as ThemeName)
			}
		}
		main()
	}, [])

	useEffect(() => {
		async function main() {
			await AsyncStorage.setItem('@preferred_theme', current)
		}
		main()
	}, [current])

	// const forceUpdate = useForceUpdate();

	const themeContext = useMemo(() => {
		const set = (val: string) => {
			setCurrent(val as ThemeName)
		}

		return {
			set,
			themes: [ThemeName.light, ThemeName.dark],
			onChangeTheme: (next: string) => {
				setCurrent(next as ThemeName)
				// forceUpdate();
			},
			current,
			systemTheme,
		}
		// }, [current, forceUpdate, systemTheme]);
	}, [current, systemTheme])

	return (
		<ThemeContext.Provider value={themeContext}>
			<InnerProvider>{children}</InnerProvider>
		</ThemeContext.Provider>
	)
}

const InnerProvider = ({ children }: { children: React.ReactNode }) => {
	const { resolvedTheme } = useThemeSetting()

	return (
		<ThemeProvider
			value={resolvedTheme === ThemeName.dark ? DarkTheme : DefaultTheme}
		>
			<StatusBar
				style={
					resolvedTheme === ThemeName.dark ? ThemeName.light : ThemeName.dark
				}
			/>
			{children}
		</ThemeProvider>
	)
}

export const useThemeSetting: typeof next_useThemeSetting = () => {
	const context = useContext(ThemeContext)

	if (!context) {
		throw new Error(
			'useThemeSetting should be used within the context provider.',
		)
	}

	const outputContext: ReturnType<typeof next_useThemeSetting> = {
		...context,
		systemTheme: context.systemTheme as ThemeName.light | ThemeName.dark,
		// biome-ignore lint/style/noNonNullAssertion: <explanation>
		themes: context.themes!,
		current: context.current ?? ThemeName.system,
		resolvedTheme:
			context.current === ThemeName.system
				? context.systemTheme
				: context.current ?? ThemeName.system,
		set: value => {
			context.onChangeTheme?.(value)
		},
		toggle: () => {
			const map = {
				light: ThemeName.dark,
				dark: ThemeName.system,
				system: ThemeName.light,
			}

			const currentTheme = context.current ?? ThemeName.system
			const nextTheme = map[currentTheme as ThemeName]

			context.onChangeTheme?.(nextTheme)
		},
	}

	return outputContext
}

export const useRootTheme = () => {
	const context = useThemeSetting()
	return [
		context.current === ThemeName.system
			? context.systemTheme
			: context.current,
		context.set,
	]
}

// Fix flash of wrong theme on iOS:
// https://github.com/bluesky-social/social-app/pull/1417
// wait on merge from react-native to remove:
// https://github.com/facebook/react-native/pull/39439
function useNonFlickeringColorScheme() {
	const colorSchemeFromRN = useColorScheme()
	const [nonFlickerScheme, setNonFlickerScheme] =
		useState<ColorSchemeName>(colorSchemeFromRN)

	useEffect(() => {
		const subscription = AppState.addEventListener('change', state => {
			const isActive = state === 'active'
			if (!isActive) return
			setNonFlickerScheme(colorSchemeFromRN)
		})

		return () => {
			subscription.remove()
		}
	}, [colorSchemeFromRN])

	return nonFlickerScheme || ThemeName.system
}
