import TxtBar from 'components/TxtBar'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import * as S from './style'

type PostContentProps = {
  title: string
  content: string
  tags: string[]
}

const PostContent = ({ title, content, tags }: PostContentProps) => {
  const controls = useAnimation()
  const controlsTags = useAnimation()
  const [ref, inView] = useInView()
  const [refTags, inViewTags] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
    return controls.stop
  }, [controls, inView])

  useEffect(() => {
    if (inViewTags) {
      controlsTags.start('visible')
    }
    return controlsTags.stop
  }, [controlsTags, inViewTags])

  const variantsContent = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  }

  const variantsContainer = {
    hidden: {},
    visible: {
      transition: {
        duration: 0.4,
        // delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  }

  return (
    <S.PostContent>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variantsContainer}
      >
        <S.Title variants={variantsContent}>{title}</S.Title>
        <motion.div variants={variantsContent}>
          <TxtBar>{content}</TxtBar>
        </motion.div>
      </motion.div>

      <S.Tags
        ref={refTags}
        initial="hidden"
        animate={controlsTags}
        variants={variantsContainer}
      >
        {tags.map((tag) => {
          return (
            <motion.li key={tag} variants={variantsContent}>
              {tag}
            </motion.li>
          )
        })}
      </S.Tags>
    </S.PostContent>
  )
}

export default PostContent
