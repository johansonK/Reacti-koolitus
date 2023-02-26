import { useState } from 'react';

function Kontakt() {
    const [ aadress, maaraAadress ] = useState ("Tallinn");
    const [ telefon, maaraTelefon] = useState ("55566677");
    const [ email, maaraEmail ] = useState ("jee@gmail.com");
    const [ ingliseKeelne, maaraIngliseKeelne ] = useState ("ei");

    const ingliskeelseks = () => {
        maaraAadress( "Tartu" );
        maaraTelefon( "53535353");
        maaraEmail( "tartu@tartu.com");
        maaraIngliseKeelne("jah");
    }

  return (
    <div>
        <div>{ aadress }</div>
        <div>{ telefon }</div>
        <div>{ email }</div>
        <button onClick={ingliskeelseks}>Muuda inglise keelseks</button>
        { ingliseKeelne === "jah" && <div>Leht on inglise keelne</div> }

    </div>
  )
}

export default Kontakt