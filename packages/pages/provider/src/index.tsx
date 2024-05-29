import type React from 'react'
import { SafeAreaProvider } from './safe_area'
import { TamaguiProvider } from './tamagui'
import { UniversalThemeProvider } from './theme'

export { UniversalThemeProvider }

export function Provider({ children }: { children: React.ReactNode }) {
	return <Providers>{children}</Providers>
}

const compose = (providers: React.FC<{ children: React.ReactNode }>[]) =>
	providers.reduce((Prev, Curr) => ({ children }) => {
		const Provider = Prev ? (
			<Prev>
				<Curr>{children}</Curr>
			</Prev>
		) : (
			<Curr>{children}</Curr>
		)
		return Provider
	})

export const Providers = compose([
	UniversalThemeProvider,
	SafeAreaProvider,
	TamaguiProvider,
])
