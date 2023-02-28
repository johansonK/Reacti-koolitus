
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import LisaTegelane from './pages/LisaTegelane';
import ValitudTegelased from './pages/ValitudTegelased';

function App() {
  return (
    <div>
      <Link to="/">
        <button>Avaleht</button>
      </Link>

      <Link to="/lisategelane">
        <button>Lisa tegelane</button>
      </Link> 

      <Link to="/valitudtegelased">
        <button>Valitud tegelased</button>
        </Link>

      <Routes>
        <Route path="" element={ <Avaleht/> } />
        <Route path="lisategelane" element={ < LisaTegelane /> } />
        <Route path="valitudtegelased" element={ <ValitudTegelased/> } />
      </Routes>


    </div>
  );
}

export default App;
