var data = [{"nome": "job 1", "url": "http://fellyph.com.br/", "empresa": "Empresa 1", "designer": "Artista 1", "tecnologias": ["HTML", "CSS", "JS"]},
{"nome": "job 2", "url": "http://fellyph.com.br/", "empresa": "Empresa 2", "designer": "Artista 2", "tecnologias": ["HTML", "CSS", "JS"]},
{"nome": "job 3", "url": "http://fellyph.com.br/", "empresa": "Empresa 3", "designer": "Artista 3", "tecnologias": ["HTML", "CSS", "JS"]},
{"nome": "job 4", "url": "http://fellyph.com.br/", "empresa": "Empresa 4", "designer": "Artista 4", "tecnologias": ["HTML", "CSS", "JS"]},
{"nome": "job 5", "url": "http://fellyph.com.br/", "empresa": "Empresa 5", "designer": "Artista 5", "tecnologias": ["HTML", "CSS", "JS"]},
{"nome": "job 6", "url": "http://fellyph.com.br/", "empresa": "Empresa 6", "designer": "Artista 6", "tecnologias": ["HTML", "CSS", "JS"]}]

class PortfolioItem extends React.Component {
  render() {
    return (
      <article class="job">
        <figure>
          <img src="http://www.fellyph.com.br/blog/wp-content/uploads/2016/05/blog-elo7-1.png" alt="blog elo7" />
        </figure>
        <h4 class="title">Blog elo7</h4>
        <ul class="fetures">
          <li><a href="#" target="_blank" alt="site">linkdosite.com.br</a></li>
          <li>Empresa: Elo7</li>
          <li>Design: Elo7</li>
          <li>Tecnologias: HTML5, CSS3, WordPress</li>
        </ul>
      </article>
    )
  }
}

class PortfolioList extends React.Component {
  render() {
    return (
      <PortfolioItem />
    )
  }
}

ReactDOM.render(
  <PortfolioList />, document.getElementById('portfolio')
);
