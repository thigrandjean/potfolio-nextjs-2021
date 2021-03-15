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
  /* width: 100%; */
  /* background: var(--color-sec); */
  color: var(--color-sec);
  text-align: center;
  padding: 0.25rem 0.5rem;
  margin-bottom: 0.75rem;
`
export const Content = styled.div`
  font-size: 1.2rem;
  color: var(--white);
`
export const CloseBtn = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    width: 3.75rem;
    height: 3.75rem;
    padding: 1rem;
    border-radius: 50%;
    cursor: pointer;
    color: var(--white);
    transition: all 0.3s ease-in-out;
    svg {
      width: 100%;
    }
    &:hover {
      color: var(--color-sec);
      background: rgba(255, 255, 255, 0.1);
    }
  }
`
