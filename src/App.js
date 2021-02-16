import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('Ahmad Ramadhan');
  const handleClick = (name) => {
    setName(name)
  }
  return (
    <div className="App">
      <h1>Halo, {name}!</h1>
      <button onClick={() => handleClick('Ahmad')}>Ahmad</button>
      <button onClick={() => handleClick('Ramadhan')}>Ramadhan</button>
      <button onClick={() => handleClick('Ahmad Ramadhan')}>Ahmad Ramadhan</button>
    </div>
  );
}

export default App;
