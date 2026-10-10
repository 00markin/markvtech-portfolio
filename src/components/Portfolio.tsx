import React, { useState } from 'react';
const Portfolio: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <section id="projeto" className="project section page-width" aria-labelledby="project-title">
      <div className="project-heading"><h2 id="project-title">Projetos em destaque</h2><p>IA aplicada / Tecnologia sob medida</p></div>
      <article className="project-body">
        <div><h3>IA aplicada</h3><p className="project-stack">Agentes · Orquestração · Automações</p></div>
        <div className="section-copy">
          <p className="lead">Especialização em IA,<br className="desktop-break" /> conectada à prática.</p>
          <p>Construímos soluções que combinam inteligência artificial, agentes e automações com os sistemas e fluxos de trabalho de cada projeto.</p>
          <button className="text-link disclosure" type="button" aria-expanded={expanded} aria-controls="project-details" onClick={() => setExpanded(!expanded)}>{expanded ? 'Fechar detalhes' : 'Conhecer a atuação'}<span aria-hidden="true">{expanded ? '−' : '+'}</span></button>
          <div id="project-details" hidden={!expanded} className="project-details"><h4>Da ideia à solução</h4><ul><li>IA aplicada e agentes para apoiar tarefas e organizar fluxos.</li><li>Orquestração, automações e integrações entre ferramentas e sistemas.</li><li>BI e sistemas sob medida para transformar necessidades em soluções úteis.</li></ul><p>Apresentamos aqui nossas áreas de atuação. Cases específicos serão publicados apenas com informações autorizadas.</p></div>
        </div>
      </article>

      <div className="portfolio-grid" aria-label="Áreas de atuação em projetos">
        <article className="portfolio-card"><h3>IA e agentes</h3><p>Aplicações de inteligência artificial e agentes com responsabilidades definidas, conectados ao contexto de cada solução.</p></article>
        <article className="portfolio-card"><h3>Orquestração e automações</h3><p>Fluxos coordenados para conectar etapas, reduzir trabalho repetitivo e organizar a execução de tarefas.</p></article>
        <article className="portfolio-card"><h3>Integrações e sistemas sob medida</h3><p>Ferramentas e aplicações construídas para necessidades específicas, com integração entre sistemas e serviços.</p></article>
        <article className="portfolio-card"><h3>BI e informação útil</h3><p>Painéis e organização de informações para acompanhar operações e apoiar decisões com clareza.</p></article>
      </div>
    </section>
  );
};
export default Portfolio;
