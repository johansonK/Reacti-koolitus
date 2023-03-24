import { useState } from 'react';
import tootajadFailist from "../tootajad.json";

function Meist() {

  const [kontakt, naitaKontakt] = useState("");
  const tootajad = tootajadFailist

  return (
    <div>
      <div>See on meist leht, nahtav localhost:3001/meist aadressil</div>
      <div>Oleme Baltiriikide tuntuim uudiste ettevõte</div>
      <br />
      <div>Meie tootajad:</div>
      <br />

      {/*<div>Tiina Teha</div>
      <div>Reporter</div>
      <button onClick={() => naitaKontakt('55577788')}>Vota uhendust</button>
      <br /> <br />
      <div>Anne Anna</div>
      <div>Ilmateadustaja</div>
      <button onClick={() => naitaKontakt('57382940')}>Vota uhendust</button>
      <br /> <br />
      <div>Toomas Puu</div>
      <div>Produtsent</div>
      <button onClick={() => naitaKontakt('54321654')}>Vota uhendust</button>
      <br /> <br />
  {kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}*/}

      {tootajad.map(yksTootaja =>  
      <div>
        <div>{yksTootaja.Nimi}</div> <br />
        <div>{yksTootaja.Ala}</div> <br />
        <button onClick={() => naitaKontakt(yksTootaja.Telefon)}>Vota uhendust</button>
        <br /><br />
      </div>)}

    </div>
  )
}

export default Meist