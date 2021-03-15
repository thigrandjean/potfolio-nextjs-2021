import styled from 'styled-components'
import { ExternalLink } from '@styled-icons/heroicons-outline/ExternalLink'

export const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-main);
  position: relative;

  &:before,
  &:after {
    content: '';
    height: 0.5rem;
    width: 100%;
    position: absolute;
    background: var(--color-sec);
  }
  &:before {
    bottom: 0;
  }
  &:after {
    top: 0;
  }
`
export const BioLinks = styled.div`
  margin-top: 2rem;
  font-size: 1.25rem;
  a,
  span {
    color: var(--color-sec);
    transition: color 0.3s ease-in-out;
    text-decoration: underline;
    &:hover {
      color: var(--color-thi);
    }
  }
`

export const ExternalIcon = styled(ExternalLink)`
  height: 1.6rem;
  margin-left: 0.5rem;
`
