import React, {useRef} from 'react'
import {useParams} from "react-router-dom"

function MuudaUudis() {

const {index} = useParams();
const uudisRef = useRef();
const uudisedLS = JSON.parse(localStorage.getItem("uudised")) || [];
const leitudUudis = uudisedLS[index];

const muuda = () => {
    uudisedLS[index] = uudisRef.current.value;
    localStorage.setItem("uudised", JSON.stringify(uudisedLS));  
}

  return (
    <div>
        <label>Uus uudis</label> <br />
        <input ref={uudisRef} defaultValue={leitudUudis} type="text" /> <br />
        <button onClick={muuda}>Muuda</button> <br />
    </div>
  )
}

export default MuudaUudis