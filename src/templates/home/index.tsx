import Bio from 'components/Bio'
import SiteHero from 'components/Hero'
import SiteHeader from 'components/SiteHeader'

export default function HomeTemplate() {
  return (
    <>
      <SiteHeader />
      <SiteHero />
      <Bio />
    </>
  )
}
