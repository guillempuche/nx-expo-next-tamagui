// Reset to get more consistent styles across browsers. More on https://tamagui.dev/docs/guides/next-js#pages_apptsx.
import { Provider } from '@nx-expo-next-tamagui/pages/provider'
import '@tamagui/core/reset.css'
import {
	type ColorScheme,
	NextThemeProvider,
	useRootTheme,
} from '@tamagui/next-theme'
import type { NextPage } from 'next'
import Head from 'next/head'
import type { ReactElement, ReactNode } from 'react'
import type { SolitoAppProps } from 'solito'

export default function App({ Component, pageProps }: SolitoAppProps) {
	// Per page layout. More here https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts
	const getLayout = Component.getLayout || (page => page)
	const [_theme, setTheme] = useRootTheme()

	return (
		<>
			<Head>
				<title>Cross Platform App</title>
				<meta name='description' content='Cross platform app' />
				<link rel='icon' href='/favicon.svg' />
			</Head>
			<NextThemeProvider
				onChangeTheme={next => {
					setTheme(next as ColorScheme)
				}}
			>
				<Provider>{getLayout(<Component {...pageProps} />)}</Provider>
			</NextThemeProvider>
		</>
	)
}

// Per page layout. More here https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts
export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode
}
