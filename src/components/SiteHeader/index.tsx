import * as S from './styles'
import Link from 'next/link'
import { useViewportScroll, useTransform, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const SiteHeader = () => {
  const { scrollYProgress } = useViewportScroll()
  const [screenHeigt, setscreenHeigt] = useState(window.innerHeight)
  const [siteHeigt, setsiteHeigt] = useState(document.body.clientHeight)
  const [heroProgress, setHeroProgress] = useState(screenHeigt / siteHeigt)
  const [heroProgressEnd, setHeroProgressEnd] = useState(heroProgress + 0.05)

  useEffect(() => {
    function handleResize() {
      setscreenHeigt(window.innerHeight)
      setsiteHeigt(document.body.clientHeight)
      setHeroProgress(screenHeigt / siteHeigt)
      setHeroProgressEnd(heroProgress + 0.05)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [heroProgress, screenHeigt, siteHeigt])

  const bgColor = useTransform(
    scrollYProgress,
    [heroProgress, heroProgressEnd],
    ['#12022C', '#FEA521']
  )

  return (
    <S.Logo>
      <motion.div
        style={{
          backgroundColor: bgColor,
          borderRadius: 100,
          width: 43,
          height: 43,
        }}
      >
        <Link href="/" aria-label="bio">
          <svg
            width="43"
            height="43"
            viewBox="0 0 43 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect className="logobg" width="43" height="43" rx="21.5" />
            <path
              className="logot"
              d="M8.73438 9.40625H16.8055H34.2656V17.4732H26.0298V34.2656H16.8055V17.4732H8.73438V9.40625Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </motion.div>
    </S.Logo>
  )
}
export default SiteHeader
