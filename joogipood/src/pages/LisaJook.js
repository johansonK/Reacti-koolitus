import React, {useRef} from 'react'
import joogidFailist from "../joogid.json";

function LisaJook() {

  const joogidRef = useRef();

  const lisaUusJook = () => {
    joogidFailist.push(joogidRef.current.value);
}

  return (
    <div>

<label></label>
    <input ref={joogidRef} />
    <button onClick={() => lisaUusJook()}>Lisa jook</button>

    </div>
  )
}

export default LisaJook