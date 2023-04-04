import React, {useState} from 'react'
import {Link} from "react-router-dom"

function HaldaUudiseid() {


const [uudised, uuendaUudised] = useState (JSON.parse(localStorage.getItem("uudised")) || [])

const kustuta = (index) => {
    uudised.splice(index,1);
    uuendaUudised(uudised.slice());
    localStorage.setItem("uudised", JSON.stringify(uudised));
}

  return (
    <div>
        {uudised.map((yksUudis, index) =>
        <div key={index}>
          <Link to={"/muuda/" + index}>
          <div>{yksUudis}</div>
          </Link>
        <button onClick={() => kustuta(index)}>Kustuta</button>
        </div>)}
    </div>
  )
}

export default HaldaUudiseid