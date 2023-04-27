import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useNavigate} from "react-router-dom";
import { useTranslation } from 'react-i18next'; 
import { useContext } from 'react';
import { CartSumContext } from '../store/CartSumContext';
import { AuthContext } from '../store/AuthContext'; 


function NavigationBar() {

    const { t, i18n } = useTranslation();
    const {cartSum} = useContext(CartSumContext);
    const {loggedIn, setLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate ();

    //{t("cart")} loogeline sulg on javascript, t on translate ja cart peab yhtima i18n failis oleva v6tmega

    const changeLang = (newLang) => {
      i18n.changeLanguage(newLang);
      localStorage.setItem("language", newLang);
    }

  //  const login = () => {
   //   setLoggedIn(true);
    //}
    const logout = () => {
      setLoggedIn(false);
      sessionStorage.removeItem("token");
      navigate("/");
    }

  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Webshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/cart">{t("cart")}</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t("shops")}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{t("contact")}</Nav.Link>
            {loggedIn === true && <Nav.Link as={Link} to="/admin">{t("admin")}</Nav.Link>}
            {loggedIn === false && <Nav.Link as={Link} to="/login">Log in</Nav.Link>}
            {loggedIn === false && <Nav.Link as={Link} to="/signup">Sign up</Nav.Link>}
            {loggedIn === true && <button onClick={logout}>Log out</button>}
          </Nav>
          <div className="cartSum">{cartSum} €</div>
          <img className="lang" src="/english.png" onClick={() => changeLang("en")} alt="" />
          <img className="lang" src="/estonia.png" onClick={() => changeLang("ee")} alt="" />
          <img className="lang" src="/russia.png" onClick={() => changeLang("ru")} alt="" />
          <img className="lang" src="/german.png" onClick={() => changeLang("de")} alt="" />       
         
        </Container>
      </Navbar>
  )
}

//<div style={{"color":"white"}}>{cartSum} €</div> <br />

export default NavigationBar