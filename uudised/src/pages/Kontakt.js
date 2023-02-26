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
    <div onClick={() => muudaNaitaTelPuiestee(!naitaTelPuiestee)}>Puiestee 5</div>
    <div>Rapla</div>
    {naitaTelPuiestee && <div>5782939</div>}
    <br />
    <div onClick={() => muudaNaitaTelKase(!naitaTelKase)}>Kase 7</div>
    <div>Keila</div>
    {naitaTelKase && <div>5889990</div>}
    <br />
    <div onClick={() => muudaNaitaTelSakala(!naitaTelSakala)}>Sakala 5</div>
    <div>Tori</div>
    {naitaTelSakala && <div>58899111</div>}
    <br />
    <div>Kiirete probleemide puhul helistage 53535353</div>
    <br />
    <div>Tartus asume Tamme 38</div>
  </div>
  )
}

export default Kontakt