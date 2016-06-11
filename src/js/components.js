class PortfolioItem extends React.Component {
  render() {
    return (
      <article class="job">
        <figure class="">
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
