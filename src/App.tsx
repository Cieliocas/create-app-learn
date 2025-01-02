import Projetos from './containers/Projetos/projetos-index'
import Sidebar from './containers/Sidebar/sidebar-index'
import Sobre from './containers/Sobre/sobre-index'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
