import './App.css';
import {Routes, Route} from "react-router-dom"
import Avaleht from "./pages/Avalik/Avaleht"
import Metsad from "./pages/Avalik/Metsad"
import Veekogud from "./pages/Avalik/Veekogud"
import Floora from "./pages/Avalik/Floora"
import Fauna from "./pages/Avalik/Fauna"
import HaldaAvaleht from "./pages/Admin/HaldaAvaleht"
import HaldaFauna from "./pages/Admin/HaldaFauna"
import HaldaFloora from "./pages/Admin/HaldaFloora"
import HaldaMetsad from "./pages/Admin/HaldaMetsad"
import HaldaVeekogud from "./pages/Admin/HaldaVeekogud"
import { useContext } from 'react';
import { AuthContext } from './store/AuthContext';
import NavigationBar from "./components/NavigationBar"


function App() {

  const { loggedIn, setLoggedIn } = useContext(AuthContext)

  return (
    <div className="container" >
      
        
      <NavigationBar/>

      <article>
      <Routes>
        <Route path="" element= { <Avaleht /> } />
        <Route path="fauna" element={ <Fauna/> }/>
        <Route path="floora" element={ <Floora/> }/>
        <Route path="metsad" element={ <Metsad/> }/>
        <Route path="veekogud" element={ <Veekogud/> }/>        
        
        <Route path="halda-avaleht" element={ <HaldaAvaleht/> }/>
        <Route path="halda-fauna" element={ <HaldaFauna /> }/>
        <Route path="halda-floora" element={ <HaldaFloora/> }/>
        <Route path="halda-metsad" element={ <HaldaMetsad/> }/>
        <Route path="halda-veekogud" element={ <HaldaVeekogud/> }/>
      </Routes>
      </article>
      
    </div>
  );
}

export default App;
