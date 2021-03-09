import styled from 'styled-components'

export const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
