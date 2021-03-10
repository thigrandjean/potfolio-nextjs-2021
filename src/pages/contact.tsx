import EmailForm from 'components/EmailForm'
import PageTemplate from 'templates/page'

export default function Contato() {
  return (
    <PageTemplate title="Contato">
      <p>Entre em contato preenchendo o formulário abaixo</p>
      <EmailForm />
    </PageTemplate>
  )
}
