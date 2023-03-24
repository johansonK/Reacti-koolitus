import React, {useRef} from 'react';
import productsFromFile from "../data/products.json"

function AddProduct() {

  //const [products, setProducts] = useState(productsFromFile);

  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();

  const add = () => {
    productsFromFile.push({
      "id": idRef.current.value,
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "image": imageRef.current.value,
      "category": categoryRef.current.value,
      "description": descriptionRef.current.value,
      "active": activeRef.current.checked}
    )

  }

  //lisamine
  //koju label + inputid + funktsioonid + productsFromFail.pudh()
  //tekib loppu juurde, refreshiga kaob ara
  return ( 
    <div>
      <label>New product</label> <br />
      <input ref={nameRef} type="text" /> <br />
      <label>New id</label> <br />
      <input ref={idRef} type="text" /> <br />
      <label>New price</label> <br />
      <input ref={priceRef} type="number" /> <br />
      <label>New image</label> <br />
      <input ref={imageRef} type="text" /> <br />
      <label>New category</label> <br />
      <input ref={categoryRef} type="text" /> <br />
      <label>Description</label> <br />
      <input ref={descriptionRef}type="text" /> <br />
      <label>Active</label> <br />
      <input ref={activeRef} type="checkbox" /> <br />
      <button onClick={add}>Add</button> <br />

    </div>
  )
}

export default AddProduct