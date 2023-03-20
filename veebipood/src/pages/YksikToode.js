import React from 'react';
import {useParams} from "react-router-dom";
import tootedFailist from "../data/tooted.json";


function YksikToode() {
  //useState, useRef, useParams <--- hookid 
  //(Reacti enda kirjutatud, koodiloik, mida on vaga lihtne kasutusele votta)
  //useSuperpower  reactState, reactRef, reactParams
  // 1. use algusega
  //2.Nad peavad olema imporditud
  //3. Neil peavad kasutusele vottes olema sulud lopus   = useState() = useRef()  =useParams()
  //4.Neid ei tohi funktsiooni sees kasutusele votta (klikiga ei saa hooke kasutusele votta)
        //Nad tekivad alati lehele minnes
        //5. Neile ei saa dunaamikat teha, ehk vahepeal hook tekib, vahepeal ei teki, ta peab alati tekkima
const {jrkNr} = useParams();   // app.js: path="yksik/:jrkNr"
const leitud = tootedFailist[jrkNr]; // votab uhe toote failist, kusjuures esimene toode on nr 0, mitte 1
//const leitud = ["Nobe", "Tesla", "BMW"][2] ----> leitud sisse tuleb bmw

//app.js url, tooted.js url ja yksiktoode const {jrkNr} seotud omavahel


  return (
    <div>
      <div>Klikitud toote jarjekorranumber: {jrkNr} </div>
      <div>Klikitud toote nimi:{leitud}</div>
      <div>Tema kirjeldus...</div>
      <div>Koostisosad:..  ..  ..</div>
    </div>
  )
}

export default YksikToode