import logo from './image-dictionary.png';
import 'bootstrap/dist/css/bootstrap.css';
import Dictionary from "./Dictionary.js";

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
           <h1>Dictionary</h1>
        <img src={logo} className="App-logo
        img-fluid" alt="logo" />
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

