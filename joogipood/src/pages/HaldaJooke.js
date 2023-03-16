import React, {useState} from 'react'
import joogidFailist from "../joogid.json";

function HaldaJooke() {

    const [joogid, uuendaJoogid] = useState (joogidFailist);
    

    const kustuta = (jrkNr) => {
        joogid.splice(jrkNr, 1);
        uuendaJoogid(joogid.slice());
    }

    
  return (
    <div>


        {joogid.map((yksJook, index) => 
        <div key={index}>
            {yksJook}
            <button onClick={() => kustuta(index)}>x</button>

        </div>)}

        

    </div>
  )
}

export default HaldaJooke