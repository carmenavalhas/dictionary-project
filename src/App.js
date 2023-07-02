import logo from './cn-logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import Dictionary from "./Dictionary.js";

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
        <img src={logo} className="App-logo
        img-fluid" alt="logo" />
   <h1 className='title'>Carmen's Dictionary</h1>
      </header>
      <main>
        <Dictionary />
      </main>
       <footer className='App-footer'>
        <small>Coded by Carmen Navalhas</small>
    </footer>
    
    </div>
    </div>
  );
}

