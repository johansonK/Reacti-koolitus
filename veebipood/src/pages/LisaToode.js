import React from 'react'
import { useRef, useState } from "react";
import tootedFailist from "../data/tooted.json"

function LisaToode() { //Reacti hookid
const [sonum, uuendaSonum] = useState("Lisa uus toode!");
const nimiViide = useRef(); // reference ehk viide inputist
const hindViide = useRef();
const piltViide = useRef();
const aktiivneViide = useRef()

//function lisa2() {}

const lisa = () => {
  if (nimiViide.current.value === "") {
    uuendaSonum("Tuhja nimetusega ei saa toodet lisada!");
  } else {
    uuendaSonum("Toode lisatud " + nimiViide.current.value);
    tootedFailist.push({
      "nimi": nimiViide.current.value,
      "hind": Number(hindViide.current.value),
      "pilt": piltViide.current.value,
      "aktiivne": aktiivneViide.current.checked}
    )
  }
  
}
  return (
    <div>
      <div>{sonum}</div> 
      <label>Uue toote nimi</label> <br />
      <input ref={nimiViide} type="text" /> <br />
      <label>Toote uus hind</label> <br />
      <input ref={hindViide} type="number" /> <br />
      <label>Toote uus pilt</label> <br />
      <input ref={piltViide} type="text" /> <br />
      <label>Toote aktiivsus</label> <br />
      <input ref={aktiivneViide} type="checkbox" /> <br />
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


