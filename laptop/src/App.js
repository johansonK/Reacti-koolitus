import { Link, Route, Routes } from 'react-router-dom'
import './App.css';
import Avaleht from './pages/Avaleht';
import VaataSulearvuteid from './pages/VaataSulearvuteid';
import LisaSulearvuteid from './pages/LisaSulearvuteid';

function App() {
  return (
    <div className="App">
      <Link to="/">
        <button>Avalehele</button>
      </Link>

      <Link to="/all">
        <button>Vaata sulearvuteid</button>
      </Link>

      <Link to="/add">
        <button>Lisa sulearvuteid</button>
      </Link>

      <Routes>
        <Route path="" exact element={ <Avaleht/> } />
        <Route path="all" exact element={ <VaataSulearvuteid/>} />
        <Route path="add" exact element={ <LisaSulearvuteid/>} />
      </Routes>
    </div>
  );
}

export default App;
