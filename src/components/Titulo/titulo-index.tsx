import { Titulo as TituloEstilo } from './titulo-styles'

export type Props = {
  children: string
  fontSize?: number
  tipo?: 'principal' | 'secundario'
}

const Titulo = ({ children, fontSize, tipo = 'principal' }: Props) => (
  <TituloEstilo fontSize={fontSize} tipo={tipo}>
    {children}
  </TituloEstilo>
)

export default Titulo
