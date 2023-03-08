import React, { useState } from 'react'

function Meist() {
  const [naitaEmaili, uuendaNaitaEmaili] = useState(false);
                                          // kui pole sellist votit - tuleb "null"
  const [telefon, uuendaTelefon] = useState(localStorage.getItem("telefon") || "")  ;
                               // kui localStorage.getItem on tuhi siis voetakse jutumarkide vahel olev vaartus
  const [aadress, uuendaAadress] = useState(localStorage.getItem("aadress") || "")      
  return (
    <div>
      <div>Meie email: {naitaEmaili === true && localStorage.getItem("email")}
                        {naitaEmaili === false && <button onClick={() => uuendaNaitaEmaili(true)}>Naita emaili</button>}
      </div>
      <div>Meie telefon: {telefon}
        {telefon.startsWith("+372") === false && <button onClick={() => uuendaTelefon( "+372" + telefon )}>Lisa suunakoood</button>}
      
      </div>    
      <div>Meie aadress: {aadress}
        <button onClick={() => uuendaAadress(aadress.toUpperCase())}>Suurteks tahtedeks</button>
        <button onClick={() => uuendaAadress(aadress.toLowerCase())}>Vaikesteks tahtedeks</button>
      </div>   
    </div>
  )
}
//.satartsWith, .includes - kontroll
//.toUpperCase - muutja
export default Meist
//loogelised sulud tahistavad JavaScripti
//kui tel algab +372 siis ei  lisata enam +372