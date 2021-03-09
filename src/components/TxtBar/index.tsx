import * as S from './style'

type TxtBVarProps = {
  children: React.ReactNode
}

const TxtBar = ({ children }: TxtBVarProps) => <S.Text>{children}</S.Text>

export default TxtBar
