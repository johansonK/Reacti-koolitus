import './App.css';
import {Routes, Route, Navigate} from "react-router-dom"
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
import NavigationBar from "./components/NavigationBar"
import LogIn from "./pages/Auth/LogIn";
import SignUp from './pages/Auth/SignUp';
import NotFound from "./pages/Avalik/NotFound";
import { useContext } from 'react';
import { AuthContext } from './store/AuthContext';




function App() {

  const { loggedIn} = useContext(AuthContext)

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
        {loggedIn === true && <>
        <Route path="halda-avaleht" element={ <HaldaAvaleht/> }/>
        <Route path="halda-fauna" element={ <HaldaFauna /> }/>
        <Route path="halda-floora" element={ <HaldaFloora/> }/>
        <Route path="halda-metsad" element={ <HaldaMetsad/> }/>
        <Route path="halda-veekogud" element={ <HaldaVeekogud/> }/>
        </>} 
        {loggedIn === false && <Route path="halda-avaleht" element={<Navigate to="/login"/>}/>}
        {loggedIn === false && <Route path="halda-fauna" element={<Navigate to="/login"/>}/>}
        {loggedIn === false && <Route path="halda-floora" element={<Navigate to="/login"/>}/>}
        {loggedIn === false && <Route path="halda-metsad" element={<Navigate to="/login"/>}/>}
        {loggedIn === false && <Route path="halda-veekogud" element={<Navigate to="/login"/>}/>}
        <Route path="logisisse" element={ <LogIn/>} />
        <Route path="registreeru" element={ <SignUp/>} />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
      </article>
      
    </div>
  );
}

export default App;
