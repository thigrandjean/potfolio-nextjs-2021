import styled from 'styled-components'

export const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: var(--color-main);
  padding: 2rem;
`
export const Heading = styled.h1`
  font-size: 1.75rem;
  width: 100%;
  color: var(--white);
`
export const Content = styled.div`
  font-size: 1.2rem;
  color: var(--white);
`
export const CloseBtn = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 3rem;
`
