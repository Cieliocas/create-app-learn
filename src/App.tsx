import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Projetos from './containers/Projetos/projetos-index'
import Sidebar from './containers/Sidebar/sidebar-index'
import Sobre from './containers/Sobre/sobre-index'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [usandoTemaDark, setUsandoTemaDark] = useState(false)

  function trocarTema() {
    setUsandoTemaDark(!usandoTemaDark)
  }

  return (
    <ThemeProvider theme={usandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocarTema={trocarTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
