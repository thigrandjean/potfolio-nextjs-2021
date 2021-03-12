import styled from 'styled-components'

export const HeroContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 5rem;
  position: relative;
  padding: 3rem;
`
export const Heading = styled.h1`
  color: var(--white);
  background: var(--color-main);
  padding: 1rem;
  border-radius: var(--radius-sm);
  text-transform: uppercase;
  font-size: 2.4rem;
  font-weight: 400;
  z-index: 1;
`
export const HeroTags = styled.ul`
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  li {
    list-style: none;
    background: var(--color-sec);
    border-radius: var(--radius-sm);
    padding: 0.3rem 0.6rem;
    margin: 0.3rem;
    color: var(--white);
    font-size: 1.2rem;
  }
`
export const HeroImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  z-index: 0;

  animation: placeholderShimmer 1.5s ease-in-out infinite alternate;
  background: linear-gradient(
    90deg,
    var(--color-thi),
    #691ecb,
    #691ecb,
    var(--color-thi)
  );
  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`
