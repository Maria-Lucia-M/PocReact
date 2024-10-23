import React from 'react';
import './App.css';
import CurrencyPesoConverter from './components/ConvertirDolar';
import logo from './components/icono.jpg';

function App() {
  return (
    <div className="App">
       <CurrencyPesoConverter />
       <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
