import { useState } from 'react'

function Meist() {
  const [ message, maaraMessage ] = useState ("Vali moni tegevus");
  return (
    <div>
      <div>{ message }</div>
      <button onClick={() => maaraMessage( "Selleks saada meile email jobs@html-css.com" )}>Kandideeri toole</button>
      <button onClick={() => maaraMessage("Meil on 10 tootajat, kelle info ilmub veebilehele lahiajal")}>Vaata meie tootajaid</button>
      <button onClick={() => maaraMessage("Uhenduse votmiseks mine lehele Kontakt")}>Vota meiega uhendust</button>
    </div>
  )
}

export default Meist