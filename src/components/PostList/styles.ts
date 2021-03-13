import styled from 'styled-components'

export const PostWrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: var(--color-main);
  @media (min-width: 1000px) {
    flex-direction: row;
  }
  &:after {
    content: '';
    width: 100%;
    height: 0.5rem;
    background: var(--color-sec);
    position: absolute;
    bottom: 0;
  }
`

type CoverProps = {
  isRight?: boolean
}
export const PostCover = styled.div<CoverProps>`
  position: relative;
  background: grey;
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

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

  @media (min-width: 1000px) {
    order: ${(props) => (props.isRight ? 1 : 0)};
    height: 100%;
  }
`
export const PostContent = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--white);
`
export const Title = styled.h2`
  color: var(--color-sec);
  text-align: left;
  width: 100%;
  max-width: var(--content-width);
  font-weight: 400;
  font-size: 1.4rem;
  font-size: 1.4rem;
`
export const Tags = styled.ul`
  margin-top: 2rem;
  font-size: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  max-width: var(--content-width);
  li {
    margin: 0.5rem 1rem 0.5rem 0;
    background: lightgray;
    color: black;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius-sm);
  }
`

type indexProps = {
  isLeft?: boolean
}
export const IndexNum = styled.div<indexProps>`
  color: var(--white);
  font-size: 12rem;
  position: absolute;
  bottom: -2.7rem;
  right: ${(props) => (props.isLeft ? 'unset' : 0)};
  left: ${(props) => (props.isLeft ? 0 : 'unset')};
  opacity: 0.1;
  font-weight: 700;
`
