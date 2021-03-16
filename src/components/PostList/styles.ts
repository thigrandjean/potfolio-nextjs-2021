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
