import React, { useEffect, useRef } from 'react';
import '../styles.css';

const MatrixBackground: React.FC<{ paused?: boolean }> = ({ paused = false }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let drops: number[] = [];
    let frame = 0;
    let previous = 0;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drops = Array.from({ length: Math.ceil(canvas.width / 20) }, () => 1);
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    const draw = (time: number) => {
      if (paused || motion.matches || document.hidden) return;
      if (time - previous >= 50) {
        previous = time;
        ctx.fillStyle = 'rgba(0,0,0,0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#65e35c';
        ctx.font = '20px monospace';
        drops.forEach((drop, i) => {
          ctx.fillText(String.fromCharCode(0x30a0 + Math.random() * 96), i * 20, drop * 20);
          drops[i] = drop * 20 > canvas.height && Math.random() > 0.975 ? 0 : drop + 1;
        });
      }
      frame = window.requestAnimationFrame(draw);
    };
    const restart = () => {
      window.cancelAnimationFrame(frame);
      previous = 0;
      if (!paused && !motion.matches && !document.hidden) frame = window.requestAnimationFrame(draw);
      else { ctx.fillStyle = '#000'; ctx.fillRect(0, 0, canvas.width, canvas.height); }
    };
    const onResize = () => { resize(); restart(); };
    resize(); restart();
    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', restart);
    motion.addEventListener('change', restart);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', restart);
      motion.removeEventListener('change', restart);
    };
  }, [paused]);
  return <canvas ref={canvasRef} className="matrix" aria-hidden="true" />;
};
export default MatrixBackground;
