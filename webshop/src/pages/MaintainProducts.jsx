import React, {useState} from 'react'
import productsFromFile from "../data/products.json";


function MaintainProducts() {

  const [products, setProducts] = useState(productsFromFile);

//const remove = () => {kodus---kustutamine}


const remove = (index) => {
  productsFromFile.splice(index, 1);
  setProducts(productsFromFile.slice())
}

  return (
    <div>
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
          <button>Change</button>
          </div>)}
    </div>
  )
}

export default MaintainProducts