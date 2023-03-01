import React, { useState } from 'react'

function Meist() {
  const [naitaEmaili, uuendaNaitaEmaili] = useState(false)
  return (
    <div>
      <div>Meie email: {naitaEmaili === true && localStorage.getItem("email")}
                        {naitaEmaili === false && <button onClick={() => uuendaNaitaEmaili(true)}>Naita emaili</button>}
      </div>
      <div>Meie telefon: {localStorage.getItem("telefon")}</div>    
      <div>Meie aadress: {localStorage.getItem("aadress")}</div>   
    </div>
  )
}

export default Meist
//loogelised sulud tahistavad JavaScripti