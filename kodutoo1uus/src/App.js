import './App.css';
import { Routes, Link, Route } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Meist from './pages/Meist';
import Kontakt from './pages/Kontakt';
import Seaded from './pages/Seaded';

function App() {
  return (
    <div className="App">
      
      <p className="Oluline jutt">
        <em> Oluline jutt</em>
      </p>
      <img className="pilt" src="https://lscdn.azureedge.net/products/computer/images/Dell-3048-19.5-Inch-Desktop-PC.jpg" alt="arvuti" />

      <Link to="/">
      <button className="avaleht">Avaleht</button>
      </Link>

      <Link to="/kontakt">
      <button className="kontakt">Kontakt</button>
      </Link>

      <Link to="/meist">
      <button className="meist">Meist</button>
      </Link>

      <Link to="/seaded">
      <button className="seaded">Seaded</button>
      </Link>


      <Routes>
        <Route path="" element={ <Avaleht/>}/>
        <Route path="kontakt" element={ <Kontakt/> }/>
        <Route path="meist" element={ <Meist/> }/>
        <Route path="seaded" element={ <Seaded/> }/>
      </Routes>

    </div>
  );
}

export default App;