import * as S from './styles'
import Link from 'next/link'

const SiteFooter = () => (
  <S.Footer>
    <S.FooterContent>
      <Link href="/contact">Enviar uma mensagem</Link>
      <a
        title="Instagram"
        target="_balnk"
        rel="noreferrer"
        href="https://instagram.com/thigrandjean"
      >
        <S.InstaIcon />
      </a>
    </S.FooterContent>
  </S.Footer>
)

export default SiteFooter
