import styled from 'styled-components'

type LogoProps = {
  isOut: boolean
}

export const Logo = styled.header`
  position: fixed;
  width: 4.3rem;
  height: 4.3rem;
  top: 2rem;
  left: 2rem;
  color: var(--white);
  z-index: 1000;
  transition: background 0.3s ease-in-out;
  background: ${(props: LogoProps) =>
    props.isOut ? 'var(--color-main)' : 'var(--color-sec)'};
  border-radius: 4rem;
  cursor: pointer;
  animation: bgEnter 0.5s cubic-bezier(0.72, 1.49, 0.63, 0.88);
  svg {
    width: 100%;
    height: 100%;
  }
  .logot {
    fill: rgba(255, 255, 255, 0);
    animation: draw 1s linear forwards 0.6s;
    stroke-dasharray: 532;
    stroke-dashoffset: -532;
    stroke-width: 1px;
    stroke: white;
  }
  @keyframes bgEnter {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes draw {
    0% {
      fill: rgba(255, 255, 255, 0);
      stroke-dashoffset: -532;
    }
    50% {
      fill: rgba(255, 255, 255, 0);
      stroke-dashoffset: -632;
    }
    70% {
      fill: rgba(255, 255, 255, 0);
      stroke-dashoffset: -632;
    }
    100% {
      fill: rgba(255, 255, 255, 1);
      stroke-dashoffset: -632;
    }
  }
`
