
import './App.css';
import {Routes, Route} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import Shops from "./pages/Shops";
import ContactUs from "./pages/ContactUs";
import AdminHome from "./pages/AdminHome";
import AddProduct from "./pages/AddProduct";
import MaintainProducts from "./pages/MaintainProducts";
import MaintainShops from "./pages/MaintainShops";
import MaintainCategories from "./pages/MaintainCategories";

function App() {


  //Firebase yles
 


  return (
    <div className="App">
      <Routes>
        <Route path="" element={ < HomePage/> } />
        <Route path="cart" element={ <Cart /> } />
        <Route path="shops" element={ <Shops /> } />
        <Route path="contact" element={ <ContactUs /> } />
        <Route path="admin" element={ <AdminHome /> } />
        <Route path="admin/add-product" element={ <AddProduct /> } />
        <Route path="admin/edit-product" element={ <HomePage /> } />
        <Route path="admin/maintain-products" element={ <MaintainProducts /> } />
        <Route path="admin/maintain-shops" element={ <MaintainShops /> } />
        <Route path="admin/maintain-categories" element={ <MaintainCategories /> } />
      </Routes>
    </div>
  );
}

export default App;
