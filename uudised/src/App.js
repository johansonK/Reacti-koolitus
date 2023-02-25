import './App.css';
import {Route, Routes, Link} from 'react-router-dom'
import Avalehele from './pages/Avalehele';
import Uudised from './pages/Uudised';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';

function App() {
  return (
    <div>

      <Link to="/">
      <button className="avalehele">Avalehele</button>
      </Link>

      <Link to="/uudised">
      <button className="Uudised">Uudised</button>
      </Link>

      <Link to="/kontakt">
      <button className="kontakt">Kontakt</button>
      </Link>

      <Link to="/meist">
      <button className="meist">Meist</button>
      </Link>


      <Routes>
        <Route path="" element={ <Avalehele/>}/>
        <Route path="uudised" element={ <Uudised/> }/>
        <Route path="kontakt" element={ <Kontakt/> }/>
        <Route path="meist" element={ <Meist/> }/>
      </Routes>
      
    </div>
  );
}

export default App;
