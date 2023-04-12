import React, {useState, useRef, useEffect} from 'react'
//import productsFromFile from "../../data/products.json";
import {Link} from "react-router-dom";
import config from "../../data/config.json"


function MaintainProducts() {

const [products, setProducts] = useState([]);
const [dbProducts, setDbProducts] = useState([]);
const searchedRef = useRef()

useEffect(() => {                                                      ///!!!!!!!, vaja see lingi l6pp muuta
  fetch(config.productsDbUrl)
    .then (response => response.json())   
    .then (json => {                     
      setProducts(json || []);  
      setDbProducts(json || []); 
    })    
}, []);


const remove = (productId) => {
  const index = dbProducts.findIndex(element => element.id === productId);
  dbProducts.splice(index, 1); // kustutan siit, sest siis kustub ka avalehelt
  //setProducts(dbProducts.slice());
  fetch(config.productsDbUrl, {"method": "PUT", "body": JSON.stringify(dbProducts)});
  searchFromProducts();
}

const searchFromProducts = () => {
  const result = dbProducts.filter(element => 
    element.name.toLowerCase().includes(searchedRef.current.value.toLowerCase()));
    //teisendab otsingu ja nime k6ik tahed vaikseks, et saaks otsida nii suurte kui ka vaikeste tahtedega
  setProducts(result);
}

  return (
    <div>
      <input onChange={searchFromProducts} ref={searchedRef} type="text" />
      <div>{products.length}pcs</div>
       {products.map((element, index2) => 
        <div key={index2} className={element.active === true ? "active-product" : "inactive-product"}>
          <img src={element.image} alt="" />
          <div>{element.id}</div>
          <div>{element.name}</div>
          <div>{element.price}</div>
          <div>{element.image}</div>
          <div>{element.category}</div>
          <div>{element.description}</div>
          <div>{element.active}</div>
          <button onClick={() => remove(element.id)}>Remove</button>
          <Link to={"/admin/edit/"+ element.id}>
            <button>Change</button>
          </Link>
        </div>)}
    </div>
  )
}
//lingi puhul tegemist url-ga st et suured ja vaiksed tahed ei mojuta nt /Admin/Edit/
export default MaintainProducts