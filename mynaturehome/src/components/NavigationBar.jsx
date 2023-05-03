import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../store/AuthContext';

function NavigationBar() {

const {loggedIn, setLoggedIn} = useContext(AuthContext);
const navigate = useNavigate ();

//const login = () => {
//    setLoggedIn(true)
//}

const logout = () => {
    setLoggedIn(false);
      sessionStorage.removeItem("token");
      navigate("/");
}


  return (    
        <nav className="sidebar">
          <ul>
            <li><a href="/">Avaleht</a></li>
            <li><a href="/fauna">Fauna</a></li>
            <li><a href="/floora">Floora</a></li>
            <li><a href="/metsad">Metsad</a></li>
            <li><a href="/veekogud">Veekogud</a></li>
            {loggedIn === true && <li><a href="/halda-avaleht">Muuda avalehte</a></li>}
            {loggedIn === true && <li><a href="/halda-fauna">Muuda faunat</a></li>}
            {loggedIn === true && <li><a href="/halda-floora">Muuda floorat</a></li>}
            {loggedIn === true && <li><a href="/halda-metsad">Muuda metsi</a></li>}
            {loggedIn === true && <li><a href="/halda-veekogud">Muuda veekogusid</a></li>} 
            {loggedIn === false && <li><a href="/logisisse">Logi sisse</a></li>}
            {loggedIn === false && <li><a href="/registreeru">Registreeru</a></li>}
            {loggedIn === true && <button onClick={logout}>Logi välja</button>}  
            
          </ul>        
      </nav>
   
  )
}

export default NavigationBar