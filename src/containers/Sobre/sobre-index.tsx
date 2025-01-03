import Titulo from '../../components/Titulo/titulo-index'
import Paragrafo from '../../components/Paragrafo/paragrafo-index'
import { GithubSecao, TecSecao } from './sobre-styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Desenvolvedor Full Stack Python em formação pela EBAC – Escola Britânica
      de Artes Criativas e Tecnologia, graduado em Design Gráfico 2D/3D pela
      Universidade Veiga de Almeida. Profissional com mais de 10 anos de
      experiência na área de criação, perfil organizado e focado. Facilidade em
      trabalhar em equipe, já coordenou equipes de criação e ajudou e orientou
      outros designers em início de carreira.
    </Paragrafo>
    <GithubSecao>
      <img
        loading="lazy"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=AndreDG88&layout=compact&langs_count=7&theme=light"
      />
      <img
        loading="lazy"
        src="https://github-readme-stats.vercel.app/api?username=AndreDG88&show_icons=true&theme=light&include_all_commits=true&count_private=true"
      />
    </GithubSecao>
    <Titulo fontSize={16}>Tecnologias que estou aprendendo:</Titulo>
    <TecSecao>
      <img
        loading="lazy"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg"
      />
      <img
        loading="lazy"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg"
      />
      <img
        loading="lazy"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
      />
      <img
        loading="lazy"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
      />
      <img
        loading="lazy"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-plain-wordmark.svg"
      />
      <img
        loading="lazy"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg"
      />
      <img
        loading="lazy"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg"
      />
      <img
        loading="lazy"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gulp/gulp-plain.svg"
      />
      <img
        loading="lazy"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grunt/grunt-original-wordmark.svg"
      />
      <img
        loading="lazy"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
      />
      <img
        loading="lazy"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/less/less-plain-wordmark.svg"
      />
      <img
        loading="lazy"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg"
      />
      <img
        loading="lazy"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
      />
    </TecSecao>
  </section>
)

export default Sobre
