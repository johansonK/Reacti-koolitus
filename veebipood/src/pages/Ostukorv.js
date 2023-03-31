import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ostukorvFailist from "../data/ostukorv.json"

function Ostukorv() { // index ehk jarjekorranumber 0     1       2          3         4
  const [ostukorv, uuendaOstukorv] = useState(ostukorvFailist)
  //const months = [];   seda ei naidata HTMLis

  const tyhjenda = () => {
    // ostukorv.splice(0)
     //uuendaOstukorv(ostukorv.slice())
     ostukorvFailist = [];
     uuendaOstukorv(ostukorvFailist.slice())
   }


  // const abil voi noole ees luuakse uus muutuja
  const lisa = (uusToode) => {
    ostukorvFailist.push(uusToode);            //.push lisab toodet
    uuendaOstukorv(ostukorvFailist.slice()); //HTML uuenduseks .slice
  }
  const kustuta = (jarjekorraNumber) => {
    ostukorvFailist.splice(jarjekorraNumber,1);                //.splice on kustutamiseks, sulgude sees: mitmendat koma mitu tukki kustutan, paremal pool mitu t[kki korraga kustutan]
    uuendaOstukorv(ostukorvFailist.slice());
  }
// jrkNr tootab key-na alati ja ei tekita anomaaliaid

  const arvutaKogusumma = () => {
    let summa = 0;  ///let muutuv v22rtus
    ostukorv.forEach(yksToode => summa = summa + yksToode.hind)
    return summa;
  }


 
  return (
    <div>
      {ostukorv.length > 0 && <button onClick={tyhjenda}>Tuhjenda</button>}
      {ostukorv.length > 0 && <div>Ostukorvis kokku {ostukorv.length} eset </div>}
      {ostukorv.map((yksToode, jrkNr) =>
        <div key={jrkNr}>
          <img className="pilt" src={yksToode.pilt} alt="" />
          <div>{yksToode.nimi}</div>
          <div>{yksToode.hind}</div> 
          <button onClick={() => lisa(yksToode)}>+</button> 
          <button onClick={() => kustuta(jrkNr)}>x</button>
        </div>)}

    {ostukorv.length === 0 &&
      <div> 
        Ostukorv on tuhi.
        <Link to="/">Tooteid lisama</Link>
      </div>}
        {ostukorv.length > 0 && 
      <div className={ arvutaKogusumma () > 500000 ? "kuldne" : undefined}>
        Kokku: {arvutaKogusumma()}  eurot 
      </div> }

    </div>
  )
}


//kui {arvutaKogusumma()}, sulud lopus siis kutsub kohe funtsiooni valja
export default Ostukorv