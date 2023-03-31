import React, {useState} from 'react'
import productsFromFile from "../../data/products.json";
import {Link} from "react-router-dom";

function HomePage() {

  const [products, setProducts] = useState(productsFromFile);

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

  const addProductToCart = (productClicked) => {
    //cartFromFile.push(productClicked);

    const cart = JSON.parse(localStorage.getItem("cart"))||[];
    //    ||[] kasutatakse, kui midagi ei ole st on tyhi
    //vana ostukorvi sisu enne juurde lisamist
        // json.parse lisab jutum2rgid
    cart.push(productClicked);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  return (
    <div>
      <button onClick={sortAZ}>Sort A-Z</button>
      <button onClick={sortZA}>Sort Z-A</button>
      <button onClick={sortPriceAsc}>Sort by price low to high</button>
      <button onClick={sortPriceDesc}>Sort by price high to low</button>
      {products.map((element,index) => 
        <div key={index}>
          <Link to={"global/single-product/" + index}>
          <img src={element.image} alt="" />
          <div>{element.id}</div>
          <div>{element.name}</div>
          <div>{element.price}</div>
          <div>{element.image}</div>
          <div>{element.category}</div> 
          <div>{element.description}</div>
          <div>{element.active}</div>
          </Link>
          <button onClick={() => addProductToCart(element)}>Add to cart</button>
          </div>)}
    </div>
  )
}

export default HomePage