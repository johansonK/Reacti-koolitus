import React, {useState} from 'react'
//import productsFromFile from "../../data/products.json";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import config from "../../data/config.json"


function HomePage() {

  const [products, setProducts] = useState([]);  
  ///useState(productsFromFile), kui pole sulgudes midagi, peavad olema kandilised sulud, muid error

  const [dbProducts, setDbProducts] = useState([]);
///!!!!!!!, vaja see lingi l6pp muuta
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

  const sortAZ = () => {
    products.sort((a,b) => a.name.localeCompare(b.name));
    setProducts(products.slice());
  }

    const sortZA = () => {
    products.sort((a,b) => b.name.localeCompare(a.name));
    setProducts(products.slice());
  }
  
  const sortPriceAsc = () => {
    products.sort((a,b) => a.price - b.price);
    setProducts(products.slice());
  }

  const sortPriceDesc = () => {
    products.sort((a,b) => b.price - a.price);
    setProducts(products.slice());
  }

  const filterProducts = (categoryClicked) => {
    const filteredProducts = dbProducts.filter((product) => product.category === categoryClicked);
    setProducts(filteredProducts);
}

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
    
    localStorage.setItem("cart", JSON.stringify(cart));
  }
 
//KODUS SHOPS OSA TEHA NAGU CATEGORIES!!!

  return (
    <div> 
      <Button onClick={sortAZ}>Sort A-Z</Button>
      <Button onClick={sortZA}>Sort Z-A</Button>
      <Button onClick={sortPriceAsc}>Sort by price low to high</Button>
      <Button onClick={sortPriceDesc}>Sort by price high to low</Button>
      <br />
      <div>{products.length}pcs</div>
      {/*<button onClick={() => filterProducts ("camping")}>Camping</button>
      <button onClick={() => filterProducts ("tent")}>Tent</button>
      <button onClick={() => filterProducts ("belts")}>Belts</button>
      <button onClick={() => filterProducts ("jeans")}>Jeans</button>*/}
      {
        categories.map(category => <button onClick={() => filterProducts (category.name)}>{category.name}</button>)
      }

      {products.map(element => 
        <div key={element.id}>
          <Link to={"/single-product/" + element.id}>
          <img src={element.image} alt="" />
          <div>{element.name}</div>
          <div>{element.price}</div>
          </Link>
          <Button variant="contained" onClick={() => addProductToCart(element)}>Add to cart</Button>
          </div>)}
    </div>
  )
}

export default HomePage