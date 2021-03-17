import TxtBar from 'components/TxtBar'
import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import * as S from './styles'

const Bio = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    rootMargin: '-70px 0px',
  })

  const bioEnter = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.25,
      },
    },
  }

  const itemEnter = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <S.Wrapper>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={bioEnter}
      >
        <motion.div variants={itemEnter}>
          <TxtBar>
            Eu, <em>Thiago Grandjean</em>, sou um designer gráfico que está
            desde 2001 nessa coisa de criar anúncios, peças de publicidade,
            projetos gráficos, editar vídeos e desenvolver sites.
          </TxtBar>
        </motion.div>
        <motion.div variants={itemEnter}>
          <S.BioLinks>
            <Link href="/contact">
              <a title="Entrar em contato">Entrar em contato</a>
            </Link>
          </S.BioLinks>
        </motion.div>
        <motion.div variants={itemEnter}>
          <S.BioLinks>
            <a
              title="Instagram"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/thigrandjean/"
            >
              Instagram
              <S.ExternalIcon />
            </a>
          </S.BioLinks>
        </motion.div>
      </motion.div>
    </S.Wrapper>
  )
}

export default Bio
