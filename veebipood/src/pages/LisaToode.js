import React from 'react'
import { useRef, useState } from "react";

function LisaToode() { //Reacti hookid
const [sonum, uuendaSonum] = useState("Lisa uus toode!");
const inputiLuger = useRef(); // reference ehk viide inputist

//function lisa2() {}

const lisa = () => {
  if (inputiLuger.current.value === "") {
    uuendaSonum("Tuhja nimetusega ei saa toodet lisada!");
  } else {
    uuendaSonum("Toode lisatud " + inputiLuger.current.value);
  }
  
}
  return (
    <div>
      <div>{sonum}</div> 
      <label>Uue toote nimi</label> <br />
      <input ref={inputiLuger} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
    </div>
  )
}

//<button onClick={() => lisa()}>Sisesta<button>
//voi
//<button onClick={lisa}>Sisesta<button>
//MITTE:
////<button onClick={lisa()}>Sisesta<button>

export default LisaToode


