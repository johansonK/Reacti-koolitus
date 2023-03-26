import React, {useState} from 'react'
import tegevusedFailist from "../tegevused.json"

function Tegevused() {
    const [tegevused, muudaTegevused] = useState(tegevusedFailist)

  return (
    <div>
    <div>Kogu tegevuse\te arv: {tegevusedFailist.length}</div>
    <button>Koik kasutaja ID 1 tegevused</button>
    <button>Koik kasutaja ID 2 tegevused</button>
    <button>Koik kasutaja ID 3 tegevused</button>
    <button>Koik valmis tegevused</button>
    {tegevused.map(yksTegevus => 
       <div>
        <div>{yksTegevus.userId}</div>
        <div>{yksTegevus.id}</div>
        <div>{yksTegevus.title}</div>
        <div>{yksTegevus.completed}</div>
        <br />
       </div>)}
    </div>
  )
}

export default Tegevused