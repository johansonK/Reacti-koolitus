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
  const navigate = useNavigate();

//muutmise puhul votab "leitud" parempoolse ja paned vasakule "muuda" sisse

  const muuda = () => {
    tootedFailist[index] = nimiViide.current.value; //nimiViide.current.value
    navigate("/halda");
  }

  return (
    <div>
      {/*<div>{index}</div>
      <div>{leitud}</div>*/}
      <label>Toote uus nimi</label> <br />
      <input type="text" ref={nimiViide} defaultValue={leitud} /> <br />
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}
//kui tahan kontrollida, siis nt voib panna
//<div>{index}</div>
//<div>{leitud}</div>
//returni algusesse ja vaadata mis naitab
export default MuudaToode