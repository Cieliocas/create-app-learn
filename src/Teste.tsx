import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;
`

function Teste() {
  return (
    <>
      <div>Olá, este é o teste 01</div>
      <Botao fontSize="18px" principal>
        Vamos começar!
      </Botao>
      <Botao principal={false}>Não quer começar?</Botao>
      <BotaoPerigo principal>CANCELAR!</BotaoPerigo>
    </>
  )
}

export default Teste
