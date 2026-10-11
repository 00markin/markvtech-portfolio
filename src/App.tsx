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
            <p>Agentes, integrações e painéis são caminhos possíveis. Um objetivo pode ser preparar um relatório periódico a partir de dados autorizados, centralizar informações em painéis inteligentes para acompanhar indicadores e destacar o que precisa de atenção ou automatizar uma etapa repetitiva com revisão humana. Um painel pode ser útil pela organização da informação, sem depender de IA. São exemplos para avaliar, não entregas comprovadas nem ganhos garantidos; a escolha depende do que é possível verificar.</p>
          </div>
        </section>
        <section id="qualidade" className="section page-width" aria-labelledby="quality-title">
          <div className="project-heading"><h2 id="quality-title">Qualidade também é parte da solução</h2><p>Critérios para construir e evoluir</p></div>
          <div className="portfolio-grid">
            <article className="portfolio-card"><h3>Testes e performance</h3><p>Testes funcionais ajudam a conferir o comportamento esperado. Medições de performance, em ambiente e escopo combinados, podem revelar gargalos antes de escolher uma otimização.</p><p>Exemplo ilustrativo: de uma etapa percebida como lenta para um diagnóstico medido e uma mudança que possa ser comparada com o ponto de partida.</p></article>
            <article className="portfolio-card"><h3>Arquitetura e observabilidade</h3><p>Separar responsabilidades em módulos e organizar registros de execução ajuda a localizar falhas e acompanhar o que precisa de atenção. Painéis e relatórios devem partir de perguntas úteis, não só de dados disponíveis.</p><p>Exemplo ilustrativo: de informações espalhadas para uma visão de indicadores e um registro que ajude a investigar o fluxo.</p></article>
            <article className="portfolio-card"><h3>Revisão de segurança</h3><p>Revisar acessos, tratamento de informações e dependências pode orientar cuidados e correções. O recorte e os limites da revisão precisam ser definidos; nenhuma verificação significa segurança absoluta.</p></article>
            <article className="portfolio-card"><h3>Documentação e evolução</h3><p>Registrar decisões, critérios de teste e pontos de manutenção facilita uma próxima mudança. Evoluir em etapas permite revisar o que funciona antes de ampliar o escopo.</p><p>Estas são capacidades e objetivos possíveis, sem alegação de casos entregues, certificação ou resultados garantidos.</p></article>
          </div>
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
