import Button from '@mui/material/Button';
import React, {useState,} from 'react';
import {Link} from "react-router-dom";
import "../../css/Cart.css";
import ParcelMachine from '../../components/Cart/ParcelMachine';
import Payment from '../../components/Cart/Payment';
import { useContext } from 'react';
//import cartFromFile from "../../data/cart.json"
import {CartSumContext} from "../../Store/CartSumContext"

function Cart() {

const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [] );
// votab kogu localStorage sisu ja lisab ostukorvi

const {setCartSum} = useContext(CartSumContext);


const emptyCart = () => {
  setCart ([]);
  localStorage.setItem("cart", JSON.stringify([]));
  setCartSum(0);
}

const decreaseQuantity = (index) => {
  cart[index].quantity = cart[index].quantity -1;
  if (cart[index].quantity === 0) {
    removeFromCart(index);
  }
  setCart(cart.slice());
  localStorage.setItem("cart", JSON.stringify(cart));
  setCartSum(summary());
}

const increaseQuantity = (index) => {
  cart[index].quantity = cart[index].quantity +1;
  setCart(cart.slice());
  localStorage.setItem("cart", JSON.stringify(cart));
  setCartSum(summary());
}

const removeFromCart = (index) => {
  cart.splice(index, 1);
  setCart(cart.slice());
  localStorage.setItem("cart", JSON.stringify(cart));
  setCartSum(summary());
}

const summary = () => {
  let sum = 0;
  cart.forEach(element => sum = sum + element.product.price * element.quantity);
  //element.product.price * element.quantity --- toote hind korrutatakse toote kogusega
  return sum.toFixed(2);// toFixed(2)---n2itab kahte koma kohta

}


  
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
          <ParcelMachine/>
          <Payment sum={summary()}/>
        </div>
        }
    </div>
    
  )
}

export default Cart