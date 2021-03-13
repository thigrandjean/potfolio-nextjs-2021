import * as S from './style'

type TxtBVarProps = {
  children: React.ReactNode
}

const TxtBar = ({ children }: TxtBVarProps) => {
  return (
    <S.Text>
      <span id="trigger">{children}</span>
    </S.Text>
  )
}

export default TxtBar
