import * as S from './styles'
import Image from 'next/image'
const title = 'Thiago Grandjean'

const skills = [
  'Designer Gráfico',
  'Editor de Vídeo',
  'Desenvolvedor Front-end',
]

const SiteHero = () => {
  const titleFade = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delayChildren: 0.5,
        staggerDirection: -1,
      },
    },
  }
  const tagsFade = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  }
  const tagItem = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  }

  return (
    <S.HeroContainer>
      <S.Heading initial="hidden" animate="visible" variants={titleFade}>
        {title}
      </S.Heading>
      <S.HeroTagsList initial="hidden" animate="visible" variants={tagsFade}>
        {skills.map((item, index) => (
          <S.Tag key={`Skill-${index}`} variants={tagItem}>
            {item}
          </S.Tag>
        ))}
      </S.HeroTagsList>
      <S.HeroImage>
        <Image
          src="/img/hero.jpg"
          layout="fill"
          objectFit="cover"
          alt="Hero image showing a photo of some magazines"
        />
      </S.HeroImage>
    </S.HeroContainer>
  )
}

export default SiteHero
