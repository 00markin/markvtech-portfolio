import React, { useState } from 'react';
import './styles.css';
import MatrixBackground from './components/MatrixBackground';
import Header from './components/Header';
import Portfolio from './components/Portfolio';

const App: React.FC = () => {
  const [paused, setPaused] = useState(false);
  return (
    <div className="matrix-container">
      <a className="skip-link" href="#main">Ir para o conteúdo</a>
      <MatrixBackground paused={paused} />
      <Header />
      <main id="main" tabIndex={-1}>
        <section className="hero page-width" aria-labelledby="hero-title">
          <h1 id="hero-title"><img className="hero-logo" src="/markv-logo-horizontal.png" alt="MarkV.tech — Soluções que constroem o futuro" /></h1>
          <p className="hero-statement">Tecnologia e IA aplicada<br className="desktop-break" /> para construir soluções.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projeto">Explorar os projetos <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#contato">Informações de contato <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-bottom">
            <p>IA aplicada · Automações · Sistemas</p>
            <label className="motion-control"><input type="checkbox" checked={paused} onChange={event => setPaused(event.target.checked)} /> Pausar animação</label>
          </div>
        </section>
        <section id="sobre" className="about section page-width" aria-labelledby="about-title">
          <h2 id="about-title">Sobre este espaço</h2>
          <div className="section-copy">
            <p className="lead">Projetos que conectam<br className="desktop-break" /> tecnologia e necessidades reais.</p>
            <p>A MarkV Tech atua com especialização em inteligência artificial aplicada, agentes, orquestração, automações, integrações, BI e sistemas sob medida.</p>
            <p>Da exploração de uma ideia à construção de ferramentas, reunimos código e contexto para desenvolver soluções úteis. Este espaço apresenta nossa atuação técnica de forma pública.</p>
          </div>
        </section>
        <Portfolio />
        <section id="engenharia" className="about section page-width" aria-labelledby="engineering-title">
          <h2 id="engineering-title">Como uma ideia vira sistema</h2>
          <div className="section-copy">
            <p className="lead">Entender, construir,<br className="desktop-break" /> verificar.</p>
            <ol className="engineering-steps">
              <li><strong>Contexto antes da ferramenta.</strong> Mapear a tarefa, as entradas e os limites ajuda a decidir se uma automação simples resolve ou se a IA tem um papel útil.</li>
              <li><strong>Um recorte que possa ser testado.</strong> Começar por um fluxo delimitado, com critérios de aceitação e revisão humana nos pontos que exigem julgamento.</li>
              <li><strong>Integração e manutenção.</strong> Tratar falhas, documentar decisões e separar um experimento de uma solução pronta para uso faz parte do trabalho de engenharia.</li>
            </ol>
            <p>Agentes, integrações e painéis são caminhos possíveis. A escolha depende do contexto, dos dados disponíveis e do que é possível verificar.</p>
          </div>
        </section>
        <section id="portfolio-publico" className="section page-width" aria-labelledby="public-title">
          <div className="project-heading"><h2 id="public-title">Projetos públicos, contextos diferentes</h2><p>Conteúdo e experiências abertas</p></div>
          <div className="portfolio-grid">
            <article className="portfolio-card"><h3>DoceMello</h3><p>Uma apresentação editorial de receitas e afeto. Conteúdo, identidade e galeria organizados em uma experiência web.</p><a className="text-link" href="https://docemello.com.br/">Explorar DoceMello</a></article>
            <article className="portfolio-card"><h3>MarkV Space</h3><p>Uma proposta de aprender fazendo e compartilhar descobertas. A comunidade permanece em construção.</p><a className="text-link" href="https://markv.space/">Conhecer o Space</a></article>
            <article className="portfolio-card"><h3>Vovó Zone</h3><p>Uma ideia de automação residencial acessível apresentada como proposta, sem produto disponível ou instalação prometida.</p><a className="text-link" href="https://vovozone.com.br/">Entender a proposta</a></article>
            <article className="portfolio-card"><h3>Localhosts</h3><p>Uma pausa no cotidiano do desenvolvimento: humor editorial e uma interação simples para percorrer as amostras.</p><a className="text-link" href="https://localhosts.com.br/">Visitar Localhosts</a></article>
          </div>
          <p className="portfolio-note">Estas páginas mostram projetos públicos do universo MarkV. Não são estudos de caso de clientes nem comprovação de resultados de IA ou automação.</p>
        </section>

        <section id="contato" className="contact section page-width" aria-labelledby="contact-title">
          <h2 id="contact-title">Contato</h2>
          <div className="section-copy">
            <p className="lead">Encontre a MarkV<br className="desktop-break" /> no nosso hub.</p>
            <p>O contato das marcas e projetos fica centralizado na MarkV Company.</p>
            <p><a className="text-link" href="https://markv.company">Contato pela MarkV Company <span aria-hidden="true">↗</span></a></p>
            <p>Endereço do portfólio: <span className="canonical-address">markv.tech</span></p>
          </div>
        </section>
      </main>
      <footer className="site-footer page-width"><a href="#top" aria-label="MarkV.tech — voltar ao início">MarkV.tech</a><p>IA aplicada, automações e sistemas sob medida.</p><a href="#top">Voltar ao início <span aria-hidden="true">↑</span></a></footer>
    </div>
  );
};
export default App;
