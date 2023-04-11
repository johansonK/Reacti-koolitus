import React, {useEffect, useState} from 'react'
//import joogidFailist from "../joogid.json";
import config from "../../data/config.json"

function HaldaJooke() {

    const [joogid, uuendaJoogid] = useState ([]);
    
    useEffect(() => {
      fetch(config.joogidDbUrl)
      .then (res => res.json())
      .then (json => uuendaJoogid(json || []))
    }, []);

    const kustuta = (jrkNr) => {
        joogid.splice(jrkNr, 1);
        uuendaJoogid(joogid.slice());
        fetch(config.joogidDbUrl, {"method": "PUT", "body": JSON.stringify(joogid)})
        
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