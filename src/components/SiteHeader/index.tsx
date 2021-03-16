import * as S from './styles'
import Link from 'next/link'
import { useViewportScroll } from 'framer-motion'
import { useEffect, useState } from 'react'

const SiteHeader = () => {
  const { scrollY } = useViewportScroll()
  const [screenHeigt, setscreenHeigt] = useState(0)
  const [siteHeigt, setsiteHeigt] = useState(0)
  const [heroProgress, setHeroProgress] = useState(screenHeigt / siteHeigt)
  const [isOut, setisOut] = useState(true)

  useEffect(() => {
    setscreenHeigt(window.innerHeight)
    setsiteHeigt(document.body.clientHeight)
    setHeroProgress(screenHeigt / siteHeigt)
    function handleResize() {
      setscreenHeigt(window.innerHeight)
      setsiteHeigt(document.body.clientHeight)
      setHeroProgress(screenHeigt / siteHeigt)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [scrollY, heroProgress, screenHeigt, siteHeigt, isOut])

  useEffect(() => {
    function updateIsOut(v: number) {
      const difference = siteHeigt - screenHeigt - 50
      const isScrolledOut = v > screenHeigt && v < difference ? false : true
      setisOut(isScrolledOut)
    }
    const unusubscribeScroll = scrollY.onChange((v) => {
      updateIsOut(v)
    })
    return () => {
      unusubscribeScroll()
    }
  }, [siteHeigt, screenHeigt, isOut, scrollY])

  return (
    <S.Logo isOut={isOut}>
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
    </S.Logo>
  )
}
export default SiteHeader
