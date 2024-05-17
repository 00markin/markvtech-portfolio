import React, { useEffect } from 'react';
import '../styles.css';

const MatrixBackground: React.FC = () => {
  useEffect(() => {
    const matrixContainer = document.querySelector('.matrix') as HTMLElement;
    const columns = Math.floor(window.innerWidth / 20);
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      const ctx = document.createElement('canvas').getContext('2d')!;
      matrixContainer.appendChild(ctx.canvas);
      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.fillStyle = '#0f0';
      ctx.font = '20px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(0x30A0 + Math.random() * 96);
        ctx.fillText(text, i * 20, drops[i] * 20);
        if (drops[i] * 20 > ctx.canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return <div className="matrix"></div>;
};

export default MatrixBackground;