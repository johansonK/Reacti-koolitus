import './App.css';
import {Routes, Route, Link} from "react-router-dom"
import Avaleht from "./pages/Avaleht"
import Metsad from "./pages/Metsad"
import Veekogud from "./pages/Veekogud"
import Floora from "./pages/Floora"
import Fauna from "./pages/Fauna"



function App() {
  return (
    <div className="App" >
      <Link to="/">
      <button className="leaf-1" >Avaleht</button> <br />
      </Link>
      <Link to="/metsad">
      <button className="leaf-1" >Metsad</button> <br />
      </Link>
      <Link to="/veekogud">
      <button className='leaf-1'>Veekogud</button> <br />
      </Link>
      <Link to="/floora">
      <button className="leaf-1">Floora</button> <br />
      </Link>
      <Link to="/fauna">
      <button className="leaf-1">Fauna</button> <br />
      </Link>
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
