import React, {useEffect, useRef, useState} from 'react'
//import joogidFailist from "../joogid.json";
import config from "../data/config.json"

function LisaJook() {

  const [joogid, setJoogid] = useState([]);
  const joogidRef = useRef();

useEffect(() => {
  fetch(config.joogidDbUrl) 
  .then(res => res.json())
  .then(json => setJoogid(json || []))  
}, []);

  const lisaUusJook = () => {
    joogid.push({"nimi": joogidRef.current.value});
    fetch(config.joogidDbUrl, {"method": "PUT", "body": JSON.stringify(joogid)})
}

  return (
    <div>

    <label>Lisa uus jook:</label>
    <input ref={joogidRef} />
    <button onClick={() => lisaUusJook()}>Lisa jook</button>

    </div>
  )
}

export default LisaJook