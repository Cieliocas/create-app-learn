import styled from 'styled-components'
import { Props } from './paragrafo-index'

export const P = styled.p<Props>`
  color: ${(props) =>
    props.tipo === 'principal'
      ? props.theme.corParaPrincipal
      : props.theme.corParaSecundaria};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  line-height: 22px;
`
