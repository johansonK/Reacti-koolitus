import React, {useState, useRef} from 'react'
import productsFromFile from "../../data/products.json";
import {Link} from "react-router-dom";


function MaintainProducts() {

const [products, setProducts] = useState(productsFromFile);
const searchedRef = useRef()

const remove = (index) => {
  productsFromFile.splice(index, 1); // kustutan siit, sest siis kustub ka avalehelt
  setProducts(productsFromFile.slice())
}

const searchFromProducts = () => {
  const result = productsFromFile.filter(element => 
    element.name.toLowerCase().includes(searchedRef.current.value.toLowerCase()));
    //teisendab otsingu ja nime k6ik tahed vaikseks, et saaks otsida nii suurte kui ka vaikeste tahtedega
  setProducts(result);
}

  return (
    <div>
      <input onChange={searchFromProducts} ref={searchedRef} type="text" />
      <div>{products.length}pcs</div>
       {products.map((element, index2) => 
        <div key={index2}>
          <img src={element.image} alt="" />
          <div>{element.id}</div>
          <div>{element.name}</div>
          <div>{element.price}</div>
          <div>{element.image}</div>
          <div>{element.category}</div>
          <div>{element.description}</div>
          <div>{element.active}</div>
          <button onClick={() => remove(index2)}>Remove</button>
          <Link to={"/admin/edit/"+ element.id}>
            <button>Change</button>
          </Link>
        </div>)}
    </div>
  )
}
//lingi puhul tegemist url-ga st et suured ja vaiksed tahed ei mojuta nt /Admin/Edit/
export default MaintainProducts