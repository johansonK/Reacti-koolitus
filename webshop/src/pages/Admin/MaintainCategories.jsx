import React from 'react'
import { useRef, useState } from 'react';
import { useEffect } from 'react'

function MaintainCategories() {
  const [categories, setCategories] = useState([]);
  const categoryRef = useRef();
 
//uef --> kohe, kui lehele tulles, midagi kysitakse v66ralt URL-lt siis peab uef tegema

  useEffect(() => {
    fetch("https://webshop-a1581-default-rtdb.europe-west1.firebasedatabase.app/categories.json") 
    ///saadud aadressilt https://jsonplaceholder.typicode.com/
      .then(response => response.json()) //.then v6tab tagastuse ja siis v6tab sisu
      .then(json => setCategories(json || []))    //json--> lehekylje sisu
  }, []);//kogu eelnev l6ik on nagu localStorage.getItem("")

  const add = () => {
    categories.push({"name": categoryRef.current.value});
    setCategories(categories.slice());
    //nagu localStorage.setItem("categories", categories)
    fetch("https://webshop-a1581-default-rtdb.europe-west1.firebasedatabase.app/categories.json", {
      "method": "PUT",   /// method default on GET, aga tuleb p66rata teistpidi
      "body": JSON.stringify(categories) // body on v6ti
    }) 
  }

  const remove = (index) => {
    categories.splice(index, 1);
    setCategories(categories.slice());
    //nagu localStorage.setItem("categories", categories)
    fetch("https://webshop-a1581-default-rtdb.europe-west1.firebasedatabase.app/categories.json", {
      "method": "PUT",   /// method default on GET, aga tuleb p66rata teistpidi
      "body": JSON.stringify(categories) // body on v6ti
    }) 
  }

  return (
    <div>
      <label>Category</label> <br />
      <input ref={categoryRef} type="text" /> <br />
      <button onClick={add}>Insert</button> <br />
      {categories.map((category, index) => 
        <div key={index}>
          <div>{category.name}</div>
          <button onClick={() => remove(index)}>Remove</button>
        </div> )}

    </div>
  )
}

export default MaintainCategories