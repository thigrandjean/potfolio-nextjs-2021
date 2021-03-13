import styled from 'styled-components'

export const Footer = styled.footer`
  height: 100vh;
  width: 100%;
  background: var(--color-sec);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const FooterContent = styled.div`
  font-size: 1.25rem;
  a {
    color: var(--color-main);
    transition: color 0.3s ease-in-out;
    &:hover {
      color: var(--color-thi);
    }
  }
`
