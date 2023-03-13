import React, {useState} from 'react';
import ostukorvFailist from "../data/ostukorv.json";

function Tooted() {
    const [tooted, uuendaTooted] = useState(["Nobe", "Tesla", "BMW"])

    const lisaOstukorvi = (klikitudToode) => {
        ostukorvFailist.push(klikitudToode);
    }

  return (
    <div>
        {tooted.map((toode, jarjekorraNr) => 
            <div key={jarjekorraNr}>
                {toode}
                <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
            </div>)}
    </div>
  )
}

export default Tooted