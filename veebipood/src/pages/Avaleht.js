import React, { useState } from 'react'

function Avaleht() {
  const[kogus, uuendaKogus] = useState(10); //number (number) - kui tehakse arvutusi: kogus, hinnad, summa
  const[sonum, uuendaSonum] = useState("Uuenda kogust!"); //sonaline (string) - koik ulejaanud: telefoninumbrid, isikukood, sonad, nimed
  const [laigitud, uuendaLaigitud] = useState(false); //kahendvaartus (boolean): sisselogitud, makstud, taisealine (eelnevad kolm on koigis keeltes samad)

  
  function nulli() {
    uuendaKogus(0);
    uuendaSonum("Panid tagasi nulli");
  }

  function vahenda() {
    uuendaKogus(kogus - 1);
    uuendaSonum("Vahendasid kogust");
  }

  function suurenda() {
    uuendaKogus(kogus + 1);
    uuendaSonum("Suurendasid kogust");
  }


  return (
    <div>
      {laigitud === true && <img src="/laigitud.svg" alt="" />}
      {laigitud === false && <img src="/mittelaigitud.svg" alt="" />}
      <button onClick={() => uuendaLaigitud(!laigitud)}>Muuda laigitut</button>
      <div>{sonum}</div>
      { kogus > 0 && <button onClick={nulli}>Nulli</button>}
      <button disabled={kogus === 0} onClick={vahenda}>-</button>
      <span className={kogus >= 10 ? "kuldne" : undefined}>{kogus}</span>
      <button onClick={suurenda}>+</button>
    </div>
  )
}
// ? on nagu else (kui kogus on suurem voi vordne nulliga)
export default Avaleht