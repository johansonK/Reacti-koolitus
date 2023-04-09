import React, {useState, useEffect} from 'react';
;

function Tooted() {

const [products, setProducts] = useState([]);  //useState([]) kandilised sulud t2hendavad tyhja arrayd




useEffect(() => {
    fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(json => setProducts(json.products))
}, []);

  return (
    <div>
        {products.map(product => 
            <div>
                <br />
                <div>Toode: {product.title}</div> 
                <div>Hind: {product.price} €</div>
                <div><img src= {product.thumbnail} alt="" />
                    </div> <br />
            </div> )}
    </div>
  )
}

export default Tooted