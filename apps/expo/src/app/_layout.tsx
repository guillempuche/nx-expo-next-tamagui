import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'
import { View } from 'react-native'

import { Provider } from '@nx-expo-next-tamagui/pages/provider'

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: '(tabs)',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()
	.then(result =>
		console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`),
	)
	.catch(console.warn)

export default function RootLayout() {
	return <RootLayoutNav />
}

function RootLayoutNav() {
	const [fontLoaded] = useFonts({
		Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
		InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
	})

	const onLayoutRootView = useCallback(async () => {
		if (fontLoaded) {
			SplashScreen.hideAsync()
		}
	}, [fontLoaded])

	if (!fontLoaded) {
		return null
	}

	return (
		<View style={{ flex: 1 }} onLayout={onLayoutRootView}>
			<Provider>
				<Stack>
					<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
					<Stack.Screen name='modal' options={{ presentation: 'modal' }} />
				</Stack>
			</Provider>
		</View>
	)
}
