
class PortfolioItem extends React.Component {
  render() {
    return (
      <article className="job">
        <h4 className="title">{this.props.nome}</h4>
        <ul className="fetures">
          <li><a href="#" target="_blank" alt="site">{this.props.site}</a></li>
          <li>Empresa: {this.props.empresa}</li>
          <li>Tecnologias: {this.props.tecnologias}</li>
        </ul>
      </article>
    )
  }
}

class PortfolioList extends React.Component {
  render() {
    const jobsList = [],
          data = [
          {"nome": "job 1", "site": "http://fellyph.com.br/", "empresa": "Empresa 1", "tecnologias": ["HTML", "CSS", "JS"]},
          {"nome": "job 2", "site": "http://fellyph.com.br/", "empresa": "Empresa 2", "tecnologias": ["HTML", "CSS", "JS"]},
          {"nome": "job 3", "site": "http://fellyph.com.br/", "empresa": "Empresa 3", "tecnologias": ["HTML", "CSS", "JS"]},
          {"nome": "job 4", "site": "http://fellyph.com.br/", "empresa": "Empresa 4", "tecnologias": ["HTML", "CSS", "JS"]}];

    data.forEach( function(job) {
      jobsList.push(<PortfolioItem nome={job.nome} site={job.site} empresa={job.empresa} tecnologias={job.tecnologias} />);
    });

    return (
      <div className="jobs">
        {jobsList}
      </div>
    );
  }
}

ReactDOM.render(
  <PortfolioList />, document.getElementById('portfolio')
);
