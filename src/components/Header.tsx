import React from 'react';
const Header: React.FC = () => (
  <header id="top" className="site-header page-width">
    <a className="wordmark" href="#top" aria-label="MarkV.tech — início">MarkV<span>.tech</span></a>
    <nav aria-label="Navegação principal"><a href="#sobre">Sobre</a><a href="#projeto">Projeto</a><a href="#contato">Contato</a></nav>
  </header>
);
export default Header;
