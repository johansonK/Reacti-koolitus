import React, {useRef, useState, useEffect} from 'react';
import {useParams, useNavigate} from "react-router-dom";
// "react-router-dom" sest tegemist URL ja navigeerimisega
//import productsFromFile from "../../data/products.json";
import config from "../../data/config.json"

function EditProduct() {
  const { id } = useParams ();
  const [dbProducts, setDbProducts] = useState([]);

// enne veebipoes: const leitud = productsFromFile[id] ---> 
//[] tahendavad jarjekorra nr alusel leidmist
//.find vs. .filter ---> kysivad,mis on tingimus
//.find annab mulle 1, koige esimene
//.filter annab koik, kellel tingimus vastab
// const found = productsFromFile.filter()[0]
//find on ilusam, kui filter, aga vahet pole
//proovit66des pole alati olulin, et tapselt sama saak, vaid et pyyaks sarnast
                                    //  573893 === "573893" ei vordu nii
const found = dbProducts.find(element => element.id === Number(id)); //.find /.sort/.map
const index = dbProducts.findIndex(element => element.id === Number(id))

//!==    ! keerab vastupidi, st ei vordu
//===     vasak ja parem pool vorduvad
/// kogus !==0   pane nulli tagasi
/// kogus === 0  suurenda/vahenda
 

  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();
  const [isUnique, setUnique] = useState(true);
  
  useEffect(() => {                                                      ///!!!!!!!, vaja see lingi l6pp muuta
    fetch(config.productsDbUrl)
      .then (response => response.json())   
      .then (json => {                      
        setDbProducts(json || []); 
      })   
  }, []);

  const edit = () => {
    if (idRef.current.value === "") {
      return;
    }
    if (nameRef.current.value === "") {
      return;
    }
    if (priceRef.current.value === "") {
      return;
    }
    dbProducts[index] = {
      "id": Number(idRef.current.value),
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "image": imageRef.current.value,
      "category": categoryRef.current.value,
      "description": descriptionRef.current.value,
      "active": activeRef.current.checked
    };
    fetch(config.productsDbUrl, {"method": "PUT", "body": JSON.stringify(dbProducts)})
    .then(res => res.json())
    .then(() => navigate("/admin/maintain-product"));
    //productsFromFile[5] = updatedProduct;
    // muutmine on jarjekorranr alusel
    //["Nobe", "BMW", "Tesla"][0] = "audi"
  }

  //fetch muudab koodi asynkroonseks, mis ei ole eriti ilus ja tekitab ebavajalikke pause, 
  //seep2rast vajalikud mingid muudatused

   const checkIdUniqueness = () => {
    if  (idRef.current.value === id) {
    setUnique(true);
    return;
  }
    const product = dbProducts.find(element => element.id === Number(idRef.current.value));
    if 
    (product === undefined) {
      //kellelgi ei ole olemas! korras, unikaalne!
      setUnique(true);
      console.log("KELLELGI EI OLE OLEMAS")
    } else{
      //kellelgi oon samasugune ID olemas, sest ei ole tyhjus leitud toote sees
      setUnique(false);
      console.log("KELLELGI ON OLEMAS")
    }
  }
    //VARIANT 2
     // const products = productsFromFile.filter(element => element.id === Number(idRef.current.value));
    // if (products.length === 0) {
    //   setUnique(true); // positiivne -> kellelgi pole
    // } else {
    //   setUnique(false);
    // }

    //VARIANT 3
    // const index = productsFromFile.findIndex(element => element.id === Number(idRef.current.value));
    // if (index === -1) {
    //   setUnique(true); // positiivne -> kellelgi pole
    // } else {
    //   setUnique(false);
    // }


  return (  
    <div>
      {found !== undefined && <div>    
      {isUnique === false && <div>ID ei ole unikaalne!</div>}
      <label>Id</label> <br />
      <input ref={idRef} onChange={checkIdUniqueness} defaultValue={found.id} type="number" /> <br />
      <label>Name</label> <br />
      <input ref={nameRef} defaultValue={found.name} type="text" /> <br />      
      <label>Price</label> <br />
      <input ref={priceRef} defaultValue={found.price} type="number" /> <br />
      <label>Image</label> <br />
      <input ref={imageRef} defaultValue={found.image} type="text" /> <br />
      <label>Category</label> <br />
      <input ref={categoryRef} defaultValue={found.category} type="text" /> <br />
      <label>Description</label> <br />
      <input ref={descriptionRef} defaultValue={found.description} type="text" /> <br />
      <label>Active</label> <br />
      <input ref={activeRef} defaultChecked={found.active} type="checkbox" /> <br />
      <button disabled={isUnique === false} onClick={edit}>Edit</button> <br />
      </div>}
      {found === undefined && <div>Toodet ei leitud</div> }
    </div>
  )
}

export default EditProduct