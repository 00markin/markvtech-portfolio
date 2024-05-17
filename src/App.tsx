import React from 'react';
import './styles.css';
import MatrixBackground from './components/MatrixBackground';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="matrix-container">
      <MatrixBackground />
      <Header />
    </div>
  );
};

export default App;