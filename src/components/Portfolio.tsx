import React, { useState } from 'react';
const Portfolio: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <section id="projeto" className="project section page-width" aria-labelledby="project-title">
      <div className="project-heading"><h2 id="project-title">Projeto em destaque</h2><p>01 / Portfólio digital</p></div>
      <article className="project-body">
        <div><h3>MarkV.tech</h3><p className="project-stack">React · TypeScript · Canvas 2D</p></div>
        <div className="section-copy">
          <p className="lead">A identidade Matrix,<br className="desktop-break" /> direto no navegador.</p>
          <p>Uma experiência construída a partir do repositório original, com animação em canvas, navegação por seções e layout adaptável.</p>
          <button className="text-link disclosure" type="button" aria-expanded={expanded} aria-controls="project-details" onClick={() => setExpanded(!expanded)}>{expanded ? 'Fechar detalhes' : 'Conhecer a construção'}<span aria-hidden="true">{expanded ? '−' : '+'}</span></button>
          <div id="project-details" hidden={!expanded} className="project-details"><h4>Como foi construído</h4><ul><li>Um único canvas desenha a chuva de caracteres.</li><li>A animação pausa quando a página fica oculta e respeita a preferência de movimento reduzido.</li><li>React organiza as seções e os controles; TypeScript verifica os tipos.</li></ul><p>Este é o primeiro projeto apresentado. As páginas abaixo já estão publicadas e suas propostas continuam em desenvolvimento.</p></div>
        </div>
      </article>
      <div className="portfolio-grid" aria-label="Projetos publicados">
        {[
          {name: 'Doce Mello', description: 'Receitas, afeto e inclusão. Uma página dedicada ao projeto para a família.', url: 'https://docemello.vercel.app/'},
          {name: 'MarkV Space', description: 'Uma oficina digital em construção para explorar e compartilhar o fazer.', url: 'https://markv.space/'},
          {name: 'Vovozone', description: 'Uma ideia de automação residencial acessível para pessoas idosas, em desenvolvimento.', url: 'https://vovozone.vercel.app/'},
          {name: 'Localhosts', description: 'Humor autoral sobre o cotidiano de quem desenvolve, com amostras interativas.', url: 'https://localhosts-zeta.vercel.app/'},
        ].map(project => <article className="portfolio-card" key={project.name}><h3>{project.name}</h3><p>{project.description}</p><a className="text-link" href={project.url}>Visitar projeto <span aria-hidden="true">↗</span></a></article>)}
      </div>
    </section>
  );
};
export default Portfolio;
