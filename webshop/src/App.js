import {Routes, Route} from "react-router-dom";
import './App.css';
import HomePage from "./pages/Global/HomePage";
import Cart from "./pages/Global/Cart";
import Shops from "./pages/Global/Shops";
import { ContactUs } from "./pages/Global/ContactUs";
import AdminHome from "./pages/Admin/AdminHome";
import AddProduct from "./pages/Admin/AddProduct";
import MaintainProducts from "./pages/Admin/MaintainProducts";
import MaintainShops from "./pages/Admin/MaintainShops";
import MaintainCategories from "./pages/Admin/MaintainCategories";
import EditProduct from './pages/Admin/EditProduct';
import NotFound from "./pages/Global/NotFound";
import SingleProduct from "./pages/Global/SingleProduct";
import NavigationBar from "./components/NavigationBar"

 
function App() {

  //proovi t66d readme.docx


 

  return (
    <div className="App">
      
      <NavigationBar/>


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
        <Route path="single-product/:id" element={<SingleProduct/>} />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
