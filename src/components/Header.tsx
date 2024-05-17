import React, { useEffect, useState } from 'react';
import '../styles.css';

const Header: React.FC = () => {
  const [text, setText] = useState('');
  const title = "MarkV.tech";
  const subtitle = "Welcome to MarkV.tech, your partner in innovative technology solutions.";

  useEffect(() => {
    let idx = 0;
    const typingSpeed = 100;
    const subtitleDelay = title.length * typingSpeed + 300;

    const typeText = (text: string, callback: () => void) => {
      if (idx < text.length) {
        setText((prev) => prev + text.charAt(idx));
        idx++;
        setTimeout(() => typeText(text, callback), typingSpeed);
      } else {
        callback();
      }
    };

    typeText(title, () => {
      idx = 0;
      setTimeout(() => typeText(subtitle, () => { }), subtitleDelay);
    });
  }, []);

  return (
    <div className="content">
      <h1 className="animated-text">{text.slice(0, title.length)}</h1>
      <p className="animated-text">{text.slice(title.length)}</p>
    </div>
  );
};

export default Header;