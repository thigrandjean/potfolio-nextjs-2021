import Bio from 'components/Bio'
import SiteFooter from 'components/SiteFooter'
import SiteHero from 'components/Hero'

export default function HomeTemplate() {
  return (
    <>
      <SiteHero />
      <Bio />

      <SiteFooter />
    </>
  )
}
