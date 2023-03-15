
import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import Tagasiside from './pages/Tagasiside';
import TagasisideAndjad from './pages/TagasisideAndjad';
import Suvalist from './pages/Suvalist';


function App() {
  return (
    <div className="App">
      

      <Link to="/">
        <button>Avalehele</button>
      </Link>

      <Link to="/tagasiside">
        <button>Tagasiside</button>
      </Link>

      <Link to="/tagasisideandjad">
        <button>Tagasiside andjad</button>
      </Link>

      <Link to="/suvalist">
        <button>Suvalised sonad</button>
      </Link>

      <Routes>
        <Route path="" element={<div>Tere</div>}/>
        <Route path="tagasiside" element={< Tagasiside/>}/>
        <Route path="tagasisideandjad" element={< TagasisideAndjad/>}/>
        <Route path="suvalist" element={< Suvalist/>}/>
      </Routes>
    </div>
  );
}

export default App;
