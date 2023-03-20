import React, {useState} from 'react';
import {Link} from "react-router-dom";
import ostukorvFailist from "../data/ostukorv.json";
import tootedFailist from "../data/tooted.json";

function Tooted() {
    const [tooted, uuendaTooted] = useState(tootedFailist);

    const sorteeriAZ = () => {
      tooted.sort((a,b) => a.localeCompare(b));
      uuendaTooted(tooted.slice());
    }

    const sorteeriZA = () => {
      tooted.sort((a,b) => b.localeCompare(a));
      uuendaTooted(tooted.slice())
    }

    const lisaOstukorvi = (klikitudToode) => {
        ostukorvFailist.push(klikitudToode);
    }



  return (
    <div>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      {tooted.map((toode, jarjekorraNr) => 
          <div key={jarjekorraNr}>
              <Link to={"/yksik/" + jarjekorraNr}>
                {toode}
              </Link>
              <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
          </div>)}
    </div>
  )
}

export default Tooted