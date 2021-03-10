import TxtBar from 'components/TxtBar'
import Link from 'next/link'
import * as S from './styles'

const Bio = () => (
  <S.Wrapper>
    <TxtBar>
      Eu, <em>Thiago Grandjean</em>, sou um designer gráfico que está desde 2001
      nessa coisa de criar anúncios, peças de publicidade, projetos gráficos,
      editar vídeos e desenvolver sites.
    </TxtBar>
    <S.BioLinks>
      <Link href="/contact">Entrar em contato</Link>
    </S.BioLinks>
  </S.Wrapper>
)

export default Bio
