import styled from 'styled-components'

export const Text = styled.p`
  width: 100%;
  max-width: var(--content-width);
  font-size: 1.2rem;
  color: var(--white);
  &:after {
    content: '';
    margin-top: 2rem;
    width: 100%;
    height: 1.5rem;
    display: block;
    background: var(--color-thi);
  }
`
