import React, { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [text, setText] = useState<string>('');
  const palavras = text.trim().split(/\s+/).filter(palavras => palavras !== '').length;
  const caracteres = text.replace(/[\s\.,!?]/g, '').length;

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div className={styles.container}>
      <h1>Contador de palavras e caracteres</h1>
      <textarea
        className={styles.textarea}
        placeholder="Digite seu texto aqui..."
        value={text}
        onChange={handleTextChange}
      />
      <div className={styles.counters}>
        <p>Palavras: {palavras}</p>
        <p>Caracteres: {caracteres}</p>
      </div>
    </div>
  );
}

export default App;
