import { useState, useRef } from "react";
import React from 'react'



function LisaTegelane() {
  const [sonum, uuendaSonum] = useState("");
  const eesnimiRef = useRef();
  const perenimiRef = useRef();
  const elukohtRef = useRef();
  const vanusRef = useRef();

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
      <label>Tegelase eenimi</label> <br />
      <input ref={eesnimiRef} type="text" /> <br />
      <label>Tegelase perenimi</label> <br />
      <input ref={perenimiRef} type="text" /> <br />
      <label>Tegelase elukoht</label> <br />
      <input ref={elukohtRef} type="text" /> <br />
      <label>Tegelase vanus</label> <br />
      <input ref={vanusRef} type="text" /> <br />
      
      <button onClick={lisaUusTegelane}>Lisa uus</button> <br />
    </div>
  )
}

export default LisaTegelane