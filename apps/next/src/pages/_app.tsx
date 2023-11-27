// Reset to get more consistent styles across browsers. More on https://tamagui.dev/docs/guides/next-js#pages_apptsx.
import { Provider } from '@nx-expo-next-tamagui/app/provider';
import '@tamagui/core/reset.css';
import {
  ColorScheme,
  NextThemeProvider,
  useRootTheme,
} from '@tamagui/next-theme';
import { NextPage } from 'next';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import type { SolitoAppProps } from 'solito';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export default function App({ Component, pageProps }: SolitoAppProps) {
  // Reference: https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts
  const getLayout = Component.getLayout || ((page) => page);
  const [_theme, setTheme] = useRootTheme();

  return (
    <>
      <Head>
        <title>Cross Platform App</title>
        <meta name="description" content="Cross platform app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <NextThemeProvider
        onChangeTheme={(next) => {
          setTheme(next as ColorScheme);
        }}
      >
        <Provider>{getLayout(<Component {...pageProps} />)}</Provider>
      </NextThemeProvider>
    </>
  );
}
