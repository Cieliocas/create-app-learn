import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
  border-radius: 4px;
`

export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corTituloSecundaria2};
  font-size: 14px;
  text-decoration: none;
  background-color: ${(props) => props.theme.corBotao};
  border-radius: 4px;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
`
