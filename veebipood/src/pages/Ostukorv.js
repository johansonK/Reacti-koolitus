import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ostukorvFailist from "../data/ostukorv.json"

function Ostukorv() { // index ehk jarjekorranumber 0     1       2          3         4
  const [ostukorv, uuendaOstukorv] = useState(ostukorvFailist)
  //const months = [];   seda ei naidata HTMLis


  // const abil voi noole ees luuakse uus muutuja
  const lisa = (uusToode) => {
    ostukorv.push(uusToode);            //.push lisab toodet
    uuendaOstukorv(ostukorv.slice()); //HTML uuenduseks .slice
  }
  const kustuta = (jarjekorraNumber) => {
    ostukorv.splice(jarjekorraNumber,1);                //.splice on kustutamiseks, sulgude sees: mitmendat koma mitu tukki kustutan, paremal pool mitu t[kki korraga kustutan]
    uuendaOstukorv(ostukorv.slice());
  }
// jrkNr tootab key-na alati ja ei tekita anomaaliaid

  return (
    <div>
      {ostukorv.map((yksToode, jrkNr) =>
        <div key={jrkNr}>
          {yksToode} 
          <button onClick={() => lisa(yksToode)}>+</button> 
          <button onClick={() => kustuta(jrkNr)}>x</button>
        </div>)}

      Ostukorv on tuhi.
      <Link to="/">Tooteid lisama</Link>


    </div>
  )
}

export default Ostukorv