import React from 'react';
import './App.css';
import CurrencyPesoConverter from './components/ConvertirDolar';

function App() {
  return (
    <div className="App">
       <CurrencyPesoConverter />
       <header className="App-header">
        <img
          src="https://imgs.search.brave.com/R4rvRIOnfVnQrM5hBPqiWb6vg4Q_zcGXp9L6XbG1mMg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZXNp/emVyLmdsYW5hY2lv/bi5jb20vcmVzaXpl/ci92Mi9kb2xhci10/YXJqZXRhLWhveS1h/LWN1YW50by1jb3Rp/emEtZWwtZG9sYXIt/VjdSTTI1SkNPTkU2/REZKSjI1NUVDRllZ/QkEuanBnP2F1dGg9/MTkxYTI2MDcwNTZj/OGYwZTJjYjIyZGE5/MzI4MjYxZjg2NWU3/NmE3ZmJmNWNlNzBl/YjI0N2JmZWQxZGMy/M2I1MiZ3aWR0aD0z/MDAmaGVpZ2h0PTIw/MCZxdWFsaXR5PTcw/JnNtYXJ0PXRydWU"
          alt="Dolar"
          style={{ width: '300px', height: 'auto' }}/>
      </header>
    </div>
  );
}

export default App;
