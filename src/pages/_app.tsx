import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'
import SiteHeader from 'components/SiteHeader'
import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Thiago Grandjean • Designer gráfico, desenvolvedor front-End e editor
          de vídeo
        </title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="Portfólio de Thiago Grandjean: designer gráfico, desenvolvedor Front-End e editor de vídeo"
        />
      </Head>
      <GlobalStyles />
      <SiteHeader />
      <Component {...pageProps} />
    </>
  )
}

export default App
