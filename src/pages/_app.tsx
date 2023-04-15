import type {AppProps} from 'next/app'
import Head from 'next/head';
import {MantineProvider} from '@mantine/core';
import {mantineThemeConfig} from 'src/constatns/mantineThemeConfig';
import '../styles/globals.scss'

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={mantineThemeConfig}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
