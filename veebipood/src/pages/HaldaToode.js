import React, {useState} from 'react'
import tootedFailist from "../data/tooted.json";
import {Link} from "react-router-dom"

function HaldaToode() {

  const [tooted, uuendaTooted] = useState(tootedFailist);

  const kustuta = (index) => {
    tootedFailist.splice(index, 1);
    uuendaTooted(tootedFailist.slice())
  }

  return (
    <div>
      

      {tooted.map((toode, jarjekorraNr) => 
            <div key={jarjekorraNr} className={ toode.aktiivne === true ? "aktiivne" : "mitteaktiivne" }> 
              <img className="pilt" src={toode.pilt} alt="" />
                <div>{toode.nimi}</div>
                <div>{toode.hind}</div>
                  <button onClick={() => kustuta(jarjekorraNr)}>Kustuta</button> 
                <Link to={"/muuda/" + jarjekorraNr}>
                  <button>Muuda</button> 
                </Link>
            </div>)}
    </div>
  )
}
// uusi muutujaid luuaks const ja noole => ees. st et voivad 
//jarjekorraNr ja index selles naites olla sama nimega.
//samuti ei toimi, toode ja jarjekorraNr valjaspool neid sulge, kus nad on

export default HaldaToode