import { useState, useRef } from "react";
import React from 'react'



function LisaTegelane() {
  const [sonum, uuendaSonum] = useState("");
  const nimiRef = useRef();

  const lisaUusTegelane = () => {
    if (nimiRef.current.value === ""){
      uuendaSonum("Nimetuseta tegelast ei saa lisada!");
    }
      else {
        uuendaSonum("Tegelane lisatud");
      }
    
  }

  return (
    <div>
      <div>{sonum}</div> 
      <label>Tegelase nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <button onClick={lisaUusTegelane}>Lisa uus</button> <br />
    </div>
  )
}

export default LisaTegelane