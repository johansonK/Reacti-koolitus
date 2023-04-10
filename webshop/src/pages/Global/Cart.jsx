import Button from '@mui/material/Button';
import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "../../css/Cart.css";
//import cartFromFile from "../../data/cart.json"

function Cart() {

const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [] );
// votab kogu localStorage sisu ja lisab ostukorvi
const [parcelMachines, setParcelMachines] = useState([]);

useEffect(() => {
  fetch("https://www.omniva.ee/locations.json")
  .then(res => res.json())//res--> response, json l6pp peab olema sama
  .then(json => setParcelMachines(json))// n2itab kuhu tulemus l2heb st json l2heb setParcelMachinesisse
}, []);
// eelnev on v6tmine, kui method ja body siis on saatmine


const emptyCart = () => {
  setCart ([]);
  localStorage.setItem("cart", JSON.stringify([]));
}

const decreaseQuantity = (index) => {
  cart[index].quantity = cart[index].quantity -1;
  if (cart[index].quantity === 0) {
    removeFromCart(index);
  }
  setCart(cart.slice());
  localStorage.setItem("cart", JSON.stringify(cart));
}

const increaseQuantity = (index) => {
  cart[index].quantity = cart[index].quantity +1;
  setCart(cart.slice());
  localStorage.setItem("cart", JSON.stringify(cart));
}

const removeFromCart = (index) => {
  cart.splice(index, 1);
  setCart(cart.slice());
  localStorage.setItem("cart", JSON.stringify(cart));
}

const summary = () => {
  let sum = 0;
  cart.forEach(element => sum = sum + element.product.price * element.quantity);
  //element.product.price * element.quantity --- toote hind korrutatakse toote kogusega
  return sum.toFixed(2);// toFixed(2)---n2itab kahte koma kohta
}

//ostukorvi kogusumma arvutus +
//mitu tykki on ostukorvis valjakuvamine +
//2ra naita valja tyhjenda nuppu, kogusumma nuppu, mitu tykki valjakuvamist +
//      kui ostukorvi pole yhtegi toodet +

//naita valja ostukorv on tyhi kirjet kui ostukorvis on esemete arv 1

///singleproduct

///////Kodus v6ib panna json view plugina peale, on parem vaadata andmeid
  return (
    <div>
      {cart.length > 0 &&      
        <div className="cart-top">
          <div> Total different items: {cart.length}</div>          
          <Button variant="outlined" onClick={emptyCart} >Empty cart</Button>
        </div>}
      {cart.map((element, index) => 
        <div className="product" key={index}>
          <img className="image" src={element.product.image} alt="" />
          <div className="name" >{element.product.name}</div>
          <div className="price" >{element.product.price} € </div>
          <div className="quantity">
            <img className="button" onClick={() => decreaseQuantity(index)} src="/minus.png" alt="" />
            <div>{element.quantity} pcs</div>
            <img className="button" onClick={() => increaseQuantity(index)} src="/plus.png" alt="" />
          </div>
          <div className="total" >{(element.product.price * element.quantity).toFixed(2)} €</div>
          <img className="button" onClick={() => removeFromCart(index)} src="/remove.png" alt="" />
          </div> )}
        {cart.length === 0 && 
        <div>
          Cart is empty. <br /> <br />
          <Link to="/" >Add products</Link> <br />
        </div>}
        {cart.length > 0 &&
        <div className="cart-bottom">
          <div className="sum" >Subtotal: {summary()} €</div>
          <select>{parcelMachines.filter(pm => pm.A0_NAME === "EE").map(pm => <option key={pm.NAME}>{pm.NAME}</option> )}</select>
        </div>
        }
    </div>
    
  )
}

export default Cart