import type { AppProps } from 'next/app'
import Head from 'next/head'
import SiteHeader from 'components/SiteHeader'
import GlobalStyles from 'styles/global'
import NextNprogress from 'nextjs-progressbar'
import { AnimatePresence, motion } from 'framer-motion'

function App({ Component, pageProps, router }: AppProps) {
  const spring = {
    // type: 'spring',
    // damping: 20,
    // stiffness: 100,
    when: 'afterChildren',
  }

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
      <NextNprogress
        color="#FEA521"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        options={{ showSpinner: false }}
      />
      <SiteHeader />
      <AnimatePresence>
        <div className="page-transition-wrapper">
          <motion.div
            transition={spring}
            key={router.pathname}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
          >
            <Component {...pageProps} key={router.pathname} />
          </motion.div>
        </div>
      </AnimatePresence>
    </>
  )
}

export default App
