import Avatar from '../../components/Avatar/avatar-index'
import Paragrafo from '../../components/Paragrafo/paragrafo-index'
import Titulo from '../../components/Titulo/titulo-index'
import { Descricao, BotaoTema, SidebarContainer } from './sidebar-styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>André Soares</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        AndreDG88
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Full Stack Python
      </Descricao>
      <BotaoTema>Mudar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
