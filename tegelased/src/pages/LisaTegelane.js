import { useState, useRef } from "react";
import React from 'react'



function LisaTegelane() {
  const [sonum, uuendaSonum] = useState("");
  const eesnimiRef = useRef();
  const perenimiRef = useRef();
  const elukohtRef = useRef();
  const vanusRef = useRef();


  const lisaUusTegelane = () => {
    if (eesnimiRef.current.value === ""){
      uuendaSonum("Eesnimeta tegelast ei saa lisada!");
    }
    if (perenimiRef.current.value === ""){
      uuendaSonum("Perenimeta tegelast ei saa lisada!");
    }
    if (elukohtRef.current.value === ""){
      uuendaSonum("Elukohata tegelast ei saa lisada!");
    }
    if (Number(vanusRef.current.value) === ""){
      uuendaSonum("Vanuseta tegelast ei saa lisada!");
    }
      else {
        uuendaSonum("Tegelane lisatud"); 
        const tegelased = JSON.parse(localStorage.getItem("tegelased")) || [];
        tegelased.push({
          "eesnimi": eesnimiRef.current.value,
          "perenimi": perenimiRef.current.value,
          "elukoht": elukohtRef.current.value,
          "vanus": Number(vanusRef.current.value)
        })
        localStorage.setItem("tegelased",JSON.stringify(tegelased))
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
      <input ref={vanusRef} type="number" /> <br />
      
      <button onClick={lisaUusTegelane}>Lisa uus</button> <br />
    </div>
  )
}

export default LisaTegelane