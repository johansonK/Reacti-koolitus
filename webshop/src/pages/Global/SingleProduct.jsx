import React, {useEffect, useState} from 'react'
import {useParams } from "react-router-dom"
//import productsFromFile from "../../data/products.json"
import config from "../../data/config.json"


function SingleProduct() {


const [dbProducts, setDbProducts] = useState([]);
const {id} = useParams();
                                    //["Nobe", "Tesla", "Nobe"]


 const found = dbProducts.find(product => product.id === Number(id));         // 1 toode "Nobe"
               // productsFromFile.filter(product => product.id === Number(id)[0]); //toodete hulk ["Nobe", "Nobe"]
               // productsFromFile.findIndex(product => product.id === Number(id)); // 1 toote jrknr  0

 //productsFromFile.find();
 
 

 useEffect(() => {                                                     
  fetch(config.productsDbUrl)
    .then (response => response.json())   
    .then (json => {                      
      setDbProducts(json || []); 
    })   
}, []);
  

/////////KODUS TEHA!!!!
 
    //veebipoe n2ite pohjal
    //yhe toote v6tmine 
    //1.app.js sees url, kus votan /:id
    //2.HomePage sees oean tegema siia lehele sattumise l2bi <Link>
    //3.Siin lehel pean useParams abil selle ID votma
    //4. .find() <--- see on erinev
  return (
    <div>
      {found !== undefined &&
        <div>
          <img src={found.image} alt="" />
          <div>ID:{found.id} </div>
          <div>Name: {found.name}</div>
          <div>Description:{found.description}</div>      
          <div>Category: {found.category}</div>
          <div>Price: {found.price}</div>
        </div>}
        {found === undefined && <div>Toodet ei leitud</div> }
    </div>
  ) 
} 

export default SingleProduct