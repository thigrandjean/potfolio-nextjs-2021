import * as S from './styles'

const SiteHeader = () => (
  <S.Logo>
    <a aria-label="bio">
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
    </a>
  </S.Logo>
)

export default SiteHeader
