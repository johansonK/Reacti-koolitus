import { useState } from 'react';
function Kontakt() {

const [naitaTelPuiestee, muudaNaitaTelPuiestee] = useState(false);
const [naitaTelKase, muudaNaitaTelKase] = useState(false);
const [naitaTelSakala, muudaNaitaTelSakala] = useState(false);


  return (
  <div>
    <div>See on kontaktide leht, nahtav localhost:3001/kontakt aadressil</div>
    <br />
    <div>Asume aadressidel: </div>
    <br />
    <div className={naitaTelPuiestee === true ? "valitud" : undefined} onClick={() => muudaNaitaTelPuiestee(!naitaTelPuiestee)}>Puiestee 5</div>
    <div>Rapla</div>
    {naitaTelPuiestee && <div className="valitud">5782939</div>}
    <br />
    <div className={naitaTelKase === true ? "valitud" : undefined}onClick={() => muudaNaitaTelKase(!naitaTelKase)}>Kase 7</div>
    <div>Keila</div>
    {naitaTelKase && <div className="valitud">5889990</div>}
    <br />
    <div className={naitaTelSakala === true ? "valitud" : undefined}onClick={() => muudaNaitaTelSakala(!naitaTelSakala)}>Sakala 5</div>
    <div>Tori</div>
    {naitaTelSakala && <div className="valitud">58899111</div>}
    <br />
    <div>Kiirete probleemide puhul helistage 53535353</div>
    <br />
    <div>Tartus asume Tamme 38</div>
  </div>
  )
}

export default Kontakt