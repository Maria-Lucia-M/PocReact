import React from 'react';
import './App.css';
import CurrencyPesoConverter from './components/ConvertirDolar';

function App() {
  return (
    <div className="App">
       <CurrencyPesoConverter />
       <header className="App-header">
        <a href='https://www.youtube.com/watch?v=BbeeuzU5Qc8'target="_blank" rel="noopener noreferrer">
        <img
          src="https://www.nme.com/wp-content/uploads/2023/09/kevin-james-meme.jpg"
          alt="Kevin James meme"
          style={{ width: '300px', height: 'auto' }}/>
        </a>
      </header>
    </div>
  );
}

export default App;
