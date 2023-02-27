import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import Meist from './pages/Meist';
import Seaded from './pages/Seaded';

// tag --> <div>   </div>   komplektide jaoks
// <img /> self-closing    tema omadused lähevadki tema sisse
// button ---> on algus ja lõpp, tema sisse kirjutatakse midagi

function App() {
  return (
    <div className="App">
      <Link to="/">
        <img className="pilt" src="https://upload.wikimedia.org/wikipedia/commons/7/74/A-Cat.jpg" alt="" />
      </Link>

      <Link to="/ostukorv">
        <button className="nupp">Ostukorvi</button>
      </Link>

      <Link to="/lisa-toode">
        <button className="nupp">Toodet lisama</button>
      </Link>

      
      <Link to="/meist">
        <button className="nupp">Meist</button>
      </Link>

      
      <Link to="/seaded">
        <button className="nupp">Seaded</button>
      </Link>

      <Routes>
        <Route path="" element={  <Avaleht /> } />
        <Route path="ostukorv" element={  <Ostukorv/>} />
        <Route path="lisa-toode" element={  <LisaToode/>} />
        <Route path="meist" element={  <Meist/>} />
        <Route path="seaded" element={  <Seaded/>} />
      </Routes>
    </div>
  );
}

export default App;