import './App.css';
import {Routes, Route, Link} from "react-router-dom"
import Avaleht from "./pages/Avaleht"
import Metsad from "./pages/Metsad"
import Veekogud from "./pages/Veekogud"
import Floora from "./pages/Floora"
import Fauna from "./pages/Fauna"



function App() {
  return (
    <div className="app" >

    <nav className="sidebar">
        <ul>
          <li><a href="/">Avaleht</a></li>
          <li><a href="/metsad">Metsad</a></li>
          <li><a href="/veekogud">Veekogud</a></li>
          <li><a href="/floora">Floora</a></li>
          <li><a href="/fauna">Fauna</a></li>
        </ul>
    </nav>
    
    
      
      <Routes>
        <Route path="" element= { <Avaleht /> } />
        <Route path="metsad" element={ <Metsad/> }/>
        <Route path="veekogud" element={ <Veekogud/> }/>
        <Route path="floora" element={ <Floora/> }/>
        <Route path="fauna" element={ <Fauna/> }/>
      </Routes>
    
      
    </div>
  );
}

export default App;
