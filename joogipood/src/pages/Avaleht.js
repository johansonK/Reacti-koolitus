import React from 'react'
import joogidFailist from "../joogid.json";


function Avaleht() {
  


  return (
    <div>Joogid:
    {joogidFailist.map((yksJook, index) => 
        <div key={index}> 
            {yksJook}
        </div>)}

    </div>
  )
}

export default Avaleht