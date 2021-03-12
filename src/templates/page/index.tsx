import * as S from './styles'
import Link from 'next/link'

type PageProps = {
  title: string
  children: React.ReactNode
}

export default function PageTemplate({ title, children }: PageProps) {
  return (
    <S.PageWrapper>
      <S.CloseBtn>
        <Link href="/" aria-label="Voltar para a home">
          <a>
            <svg
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.487129 19.0788C0.0910416 19.4749 0.0910416 20.1171 0.487129 20.5132C0.883247 20.9093 1.52546 20.9093 1.92155 20.5132L10.3849 12.0498L18.8485 20.5133C19.2445 20.9095 19.8868 20.9095 20.2828 20.5133C20.679 20.1172 20.679 19.475 20.2828 19.0789L11.8193 10.6154L20.2828 2.1519C20.6789 1.7558 20.6789 1.11359 20.2828 0.717487C19.8868 0.321384 19.2445 0.321386 18.8484 0.717487L10.3849 9.18099L1.92158 0.717647C1.52546 0.321546 0.883247 0.321546 0.48716 0.717647C0.0910416 1.11375 0.0910416 1.75596 0.48716 2.15206L8.95051 10.6154L0.487129 19.0788Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </Link>
      </S.CloseBtn>
      <S.Heading>{title}</S.Heading>
      <S.Content>{children}</S.Content>
    </S.PageWrapper>
  )
}
