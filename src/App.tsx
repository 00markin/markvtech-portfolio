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
          <p className="hero-statement">Um espaço para projetos<br className="desktop-break" /> de tecnologia.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projeto">Explorar o projeto <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#contato">Informações de contato <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-bottom">
            <p>Portfólio digital · React + TypeScript</p>
            <label className="motion-control"><input type="checkbox" checked={paused} onChange={event => setPaused(event.target.checked)} /> Pausar animação</label>
          </div>
        </section>
        <section id="sobre" className="about section page-width" aria-labelledby="about-title">
          <h2 id="about-title">Sobre este espaço</h2>
          <div className="section-copy">
            <p className="lead">Tecnologia, identidade<br className="desktop-break" /> e código em movimento.</p>
            <p>Este portfólio parte da identidade original da MarkV.tech: fundo preto, verde e uma chuva de caracteres inspirada em Matrix.</p>
            <p>A base é uma aplicação em React e TypeScript. Aqui, o próprio site é o primeiro projeto apresentado.</p>
          </div>
        </section>
        <Portfolio />
        <section id="contato" className="contact section page-width" aria-labelledby="contact-title">
          <h2 id="contact-title">Contato</h2>
          <div className="section-copy">
            <p className="lead">Um canal direto,<br className="desktop-break" /> em definição.</p>
            <p>Este portfólio está em construção. O canal de contato será informado aqui após confirmação.</p>
            <p>Endereço do portfólio: <span className="canonical-address">markv.tech</span></p>
          </div>
        </section>
      </main>
      <footer className="site-footer page-width"><a href="#top" aria-label="MarkV.tech — voltar ao início">MarkV.tech</a><p>Portfólio em construção. Novos projetos serão incluídos após revisão.</p><a href="#top">Voltar ao início <span aria-hidden="true">↑</span></a></footer>
    </div>
  );
};
export default App;
