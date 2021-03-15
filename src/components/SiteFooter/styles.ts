import styled from 'styled-components'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'

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
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.25rem;
  a {
    color: var(--color-main);
    transition: color 0.3s ease-in-out;
    &:hover {
      color: var(--color-thi);
    }
  }
`

export const InstaIcon = styled(Instagram)`
  width: 4rem;
  margin: 1rem;
  font-size: 1.25rem;
  color: var(--color-main);
  transition: all 0.3s ease-in-out;
  &:hover {
    color: var(--color-thi);
    transform: scale(1.1);
  }
`
