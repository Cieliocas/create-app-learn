import styled from 'styled-components'
import { P } from '../../components/Paragrafo/paragrafo-styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.corTituloSecundaria2};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corBotaoTema};
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`
