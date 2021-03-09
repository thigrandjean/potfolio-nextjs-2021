import * as S from './styles'
import Image from 'next/image'

const title = 'Thiago Grandjean'

const skills = [
  'Designer Gráfico',
  'Editor de Vídeo',
  'Desenvolvedor Front-end',
]

const SiteHero = () => (
  <S.HeroContainer>
    <S.Heading>{title}</S.Heading>
    <S.HeroTags>
      {skills.map((item, index) => (
        <li key={`Skill-${index}`}>{item}</li>
      ))}
    </S.HeroTags>
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

export default SiteHero
