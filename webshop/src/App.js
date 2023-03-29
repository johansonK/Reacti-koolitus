

import {Routes, Route, Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import './App.css';
import HomePage from "./pages/Global/HomePage";
import Cart from "./pages/Global/Cart";
import Shops from "./pages/Global/Shops";
import ContactUs from "./pages/Global/ContactUs";
import AdminHome from "./pages/Admin/AdminHome";
import AddProduct from "./pages/Admin/AddProduct";
import MaintainProducts from "./pages/Admin/MaintainProducts";
import MaintainShops from "./pages/Admin/MaintainShops";
import MaintainCategories from "./pages/Admin/MaintainCategories";
import EditProduct from './pages/Admin/EditProduct';
import NotFound from "./pages/Global/NotFound";


function App() {

  //koju:
  // addproduct--toote lisamine 
  //maintainproduct//toote kustutamine
  //lisa 3 ja 4 keel veel

  //bootstrap// kodusesse projekti > uudised
  //i18n --- kodusesse projekti > uudised
  //favicon
  //muutke rakenduse nimetus
  //lisage google font

  const { t, i18n } = useTranslation();

  const changeLang = (newLang) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  }

//{t("cart")} loogeline sulg on javascript, t on translate ja cart peab yhtima i18n failis oleva v6tmega

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Webshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/cart">{t("cart")}</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t("shops")}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{t("contact")}</Nav.Link>
            <Nav.Link as={Link} to="/admin">{t("admin")}</Nav.Link>
          </Nav>
          <img className="lang" src="/english.png" onClick={() => changeLang("en")} alt="" />
          <img className="lang" src="/estonia.png" onClick={() => changeLang("ee")} alt="" />
          <img className="lang" src="/russia.png" onClick={() => changeLang("ru")} alt="" />
          <img className="lang" src="/german.png" onClick={() => changeLang("de")} alt="" />
          

          
        </Container>
      </Navbar>


      <Routes>
        <Route path="" element={ < HomePage/> } />
        <Route path="cart" element={ <Cart /> } />
        <Route path="shops" element={ <Shops /> } />
        <Route path="contact" element={ <ContactUs /> } />
        <Route path="admin" element={ <AdminHome /> } />
        <Route path="admin/add-product" element={ <AddProduct /> } />
        <Route path="admin/edit/:id" element={ <EditProduct /> } />
        <Route path="admin/maintain-product" element={ <MaintainProducts /> } />
        <Route path="admin/maintain-shops" element={ <MaintainShops /> } />
        <Route path="admin/maintain-categories" element={ <MaintainCategories /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
