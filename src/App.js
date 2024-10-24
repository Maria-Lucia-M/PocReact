import React from 'react';
import './App.css';

import logo from './components/icono.jpg';
const CurrencyPesoConverter = React.lazy(() => import('./components/ConvertirDolar'));
function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className="App">
        <CurrencyPesoConverter />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </React.Suspense>
  );
}

export default App;

