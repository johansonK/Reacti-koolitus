import React, {useState} from 'react';
import {Link} from "react-router-dom";
//import cartFromFile from "../../data/cart.json"

function Cart() {

const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [] );
// votab kogu localStorage sisu ja lisab ostukorvi

const emptyCart = () => {
  setCart ([]);
  localStorage.setItem("cart", JSON.stringify([]));
}

const removeFromCart = (index) => {
  cart.splice(index, 1);
  setCart(cart.slice());
  localStorage.setItem("cart", JSON.stringify(cart));
}

const summary = () => {
  let sum = 0;
  cart.forEach(element => sum = sum + element.price);
  return sum;
}

//ostukorvi kogusumma arvutus +
//mitu tykki on ostukorvis valjakuvamine +
//2ra naita valja tyhjenda nuppu, kogusumma nuppu, mitu tykki valjakuvamist +
//      kui ostukorvi pole yhtegi toodet +

//naita valja ostukorv on tyhi kirjet kui ostukorvis on esemete arv 1

///singleproduct


  return (
    <div>
      {cart.length > 0 && <button onClick={emptyCart}>Empty cart</button>} <br /> <br />
      {cart.length > 0 && <div>Item summary: {cart.length}</div>}
      {cart.map((element, index) => 
        <div>
          <img src={element.image} alt="" />
          <div>{element.name}</div>
          <div>{element.price}</div>
          <button onClick={() => removeFromCart(index)}>X</button>
        </div> )}
        {cart.length === 0 && 
        <div>
          Cart is empty. <br /> <br />
          <Link to="/" >Add products</Link> <br />
        </div>}
        {cart.length > 0 &&
        <div>
          Subtotal: {summary()}
        </div>
        }
    </div>
    
  )
}

export default Cart