import React, {useState} from 'react'
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

//ostukorvi kogusumma arvutus
//mitu tykki on ostukorvis valjakuvamine
//2ra naita valja tyhjenda nuppu, kogusumma nuppu, mitu tykki valjakuvamist
//      kui ostukorvi pole yhtegi toodet

//naita valja ostukorv on tyhi kirjet kui ostukorvis on esemete arv 1

///singleproduct


  return (
    <div>
      <button onClick={emptyCart}>Empty cart</button>
      {cart.map((element, index) => 
        <div>
          <img src={element.image} alt="" />
          <div>{element.name}</div>
          <div>{element.price}</div>
          <button onClick={() => removeFromCart(index)}>X</button>
        </div> )}
    </div>
  )
}

export default Cart