import Paragrafo from '../Paragrafo/paragrafo-index'
import Titulo from '../Titulo/titulo-index'
import { Card, LinkBotao } from './projeto-styles'

const Projeto = () => (
  <Card>
    <Titulo tipo="secundario">Titulo de Teste</Titulo>
    <Paragrafo tipo="secundario"> Texto modelo descritivo de Teste</Paragrafo>
    <LinkBotao>Github</LinkBotao>
  </Card>
)

export default Projeto
