import React, {useState} from 'react'
//import productsFromFile from "../../data/products.json";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import config from "../../data/config.json"
import SortButtons from '../../components/Home/SortButtons';
import FilterButtons from '../../components/Home/FilterButtons';
import { useContext } from 'react';
import { CartSumContext } from '../../store/CartSumContext';
import styles from "../../css/HomePage.module.css"

function HomePage() {

  const [products, setProducts] = useState([]);  
  ///useState(productsFromFile), kui pole sulgudes midagi, peavad olema kandilised sulud, muid error

  const [dbProducts, setDbProducts] = useState([]);
///!!!!!!!, vaja see lingi l6pp muuta

const {setCartSum} = useContext (CartSumContext);

 const [categories, setCategories] = useState([]);
  useEffect(() => {       
   
      fetch(config.categoriesDbUrl)      
        .then(response => response.json()) 
        .then(json => setCategories(json || []))
    fetch(config.productsDbUrl)
      .then (response => response.json())   ///terve p2ring, k6ik andmed, mis seal saada
      .then (json => {                      ///kindlad andmed
        setProducts(json || []);  //null on t2ielik tyhjus, [] on tyhi hulk, ag amitte t'ielik tyhjus
        setDbProducts(json || []); // [].length  [].map()   annavad errori:  null.length   null.map()
      })   
  }, []);

  // "" .starttsWith()  "".endsWith  tyhi s6na
  // [][0]  [].map()  [].    tyhi array

  

  

  const addProductToCart = (productClicked) => {
    const cart = JSON.parse(localStorage.getItem("cart"))||[];
    //    ||[] kasutatakse, kui midagi ei ole st on tyhi
    //vana ostukorvi sisu enne juurde lisamist
    // json.parse lisab jutum2rgid
    // .find ()--->kas on v6i ei ole ostukorvis. 
    //if () {} else {} ---> kui on, siis suurendan kogust, kui ei ole siis pushin kogusega 1
    //.find ()---> Kui leiab siis tagastab toote enda, kui ei leia, siis tagastab "undefined"
    //.findIndex() -> kui leiab, siis tagastab toote jarjekorranumbri, kui ei leia siis, tagastab -1
    const index = cart.findIndex(element => element.product.id === productClicked.id);
        if (index !== -1) {
          // voi (index >= 0)
          //muudan ---> suurendan kogust      KUI midagi muudan voi kustutan, vajana alati jarjekorranumbrit
        cart[index].quantity = cart[index].quantity +1;
        // muudan siin ainult quantity suurust
        //uuendaKogus( kogus +1)
        //tootedFailist[irknr] = toodeRef.current.value
        } else {
          cart.push({"product": productClicked, "quantity": 1});
        }

        let sum = 0;
        cart.forEach(element => sum = sum + element.product.price * element.quantity);
        setCartSum (sum.toFixed(2));  
                  
        localStorage.setItem("cart", JSON.stringify(cart));    
      }
 
//KODUS SHOPS OSA TEHA NAGU CATEGORIES!!!

  return (
    <div> 
      <SortButtons products={products} setProducts={setProducts}/>
      <div>{products.length}pcs</div>
      
     <FilterButtons
      dbProducts={dbProducts}
      setProducts={setProducts}
      categories={categories}
     />
      <div className={styles["products-wrapper"]}>
      {products.filter(element => element.active === true).map(element =>  
        <div key={element.id} className={styles["product"]}>
          <Link to={"/single-product/" + element.id}>
          <img src={element.image} alt="" />
          <div>{element.name}</div>
          <div>{element.price}</div>
          </Link>
          <Button variant="contained" onClick={() => addProductToCart(element)}>Add to cart</Button>
          </div>)}
      </div>
    </div>
  )
}

export default HomePage