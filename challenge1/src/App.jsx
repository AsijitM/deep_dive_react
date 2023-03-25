import React, { useState } from 'react';
import './App.css';
import Box from './Box';
import Search from './Search';

export default function App() {
  const [hex, setHex] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div>
      <Box hex={hex} darkText={isDarkText} />
      <Search
        hex={hex}
        setHex={setHex}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}
