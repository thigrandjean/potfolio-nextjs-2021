import styled from 'styled-components'

export const Logo = styled.header`
  position: fixed;
  width: 4.3rem;
  height: 4.3rem;
  top: 2rem;
  left: 2rem;
  color: var(--white);
  z-index: 1000;
  background: var(--color-main);
  border-radius: 4rem;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
    /* fill: var(--color-main); */
  }
`
