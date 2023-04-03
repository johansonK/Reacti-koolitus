import React from 'react'
import {useParams } from "react-router-dom"
import productsFromFile from "../../data/products.json"

function SingleProduct() {

 const {id} = useParams();
 //const found = productsFromFile[id]
 const found = productsFromFile.find(element => element.id === Number(id));
 //const index = productsFromFile.findIndex(element => element.id === Number(id))
  

/////////KODUS TEHA!!!!
 
    //veebipoe n;ite pohjal
    //yhe toote v6tmine 
    //1.app.js sees url, kus votan /:id
    //2.HomePage sees oean tegema siia lehele sattumise l2bi <Link>
    //3.Siin lehel pean useParams abil selle ID votma
    //4. .find() <--- see on erinev
  return (
    <div>
      <img src={found.image} alt="" />
      <div>ID:{found.id} </div>
      <div>Name: {found.name}</div>
      <div>Description:..</div>
      <div>Price: {found.price}</div>
    </div>
  ) 
} 


//
//
//
//
export default SingleProduct