import * as S from './styles'

const sendForm = (e: React.SyntheticEvent) => {
  e.preventDefault()
  console.log('Envia')
}

const EmailForm = () => (
  <S.Form onSubmit={sendForm}>
    <S.Label htmlFor="name">Nome</S.Label>
    <S.Input type="text" id="name" />
    <S.Label htmlFor="email">E-Mail</S.Label>
    <S.Input type="text" id="email" />
    <S.Label htmlFor="subject">Assunto</S.Label>
    <S.Input type="text" id="subject" />
    <S.Label htmlFor="msg">Mensagem</S.Label>
    <S.TextArea as="textarea" name="msg" id="msg"></S.TextArea>
    <S.Button>Enviar</S.Button>
  </S.Form>
)
export default EmailForm
