import React, {useRef} from 'react'
import {useParams, useNavigate} from "react-router-dom";
import tootedFailist from "../data/tooted.json";

function MuudaToode() {
  const {index} = useParams();                 
  //path="/muuda/:index" element={ <MuudaToode/> }
  //console.log(index)   <--vigade leidmiseks
  const leitud = tootedFailist[index];
  //console.log(leitud)     <--vigade leidmiseks
  const nimiViide = useRef();
  const hindViide = useRef();
  const piltViide = useRef();
  const aktiivneViide = useRef();
  const navigate = useNavigate();

//muutmise puhul votab "leitud" parempoolse ja paned vasakule "muuda" sisse

  const muuda = () => {
    tootedFailist[index] = {
      "nimi": nimiViide.current.value,
      "hind": Number(hindViide.current.value), //kui on number, siis on midagi eirlist
      "pilt": piltViide.current.value,
      "aktiivne": aktiivneViide.current.checked // kui on checkbox siis on midagi erilist
    }; //nimiViide.current.value
    navigate("/halda");
  }

  return (
    <div>
      {/*<div>{index}</div>
      <div>{leitud}</div>*/}
      <label>Toote uus nimi</label> <br />
      <input type="text" ref={nimiViide} defaultValue={leitud.nimi} /> <br />
      <label>Toote uus hind</label> <br />
      <input type="number" ref={hindViide} defaultValue={leitud.hind} /> <br />
      <label>Toote uus pilt</label> <br />
      <input type="text" ref={piltViide} defaultValue={leitud.pilt} /> <br />
      <label>Toote aktiivsus</label> <br />
      <input type="checkbox" ref={aktiivneViide} defaultChecked={leitud.aktiivne} /> <br />
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}
//kui tahan kontrollida, siis nt voib panna
//<div>{index}</div>
//<div>{leitud}</div>
//returni algusesse ja vaadata mis naitab
export default MuudaToode