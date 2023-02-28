import React, {useState} from 'react'

function Ilmumine() {
    const[naitaLisainfot, uuendaNaitaLisainfot] = useState(false);

  return (
    <div>
        <div onClick={() => uuendaNaitaLisainfot(!naitaLisainfot)}>
            Sooduskoodi sisestamine ja makse arvutuskaik
            {naitaLisainfot === true && <span>A</span> }
            {naitaLisainfot === false && <span>V</span> }
            {naitaLisainfot === true && <div>Tellitavad tooted ja teenused
                Lisatud teenused

                Family pakett

                Soodustus kuni 29.03.2023

                0,00 €/kuu

                39,00 €/kuu

                Videolaenutus

                Sisaldub paketis

                FOX NOW

                Sisaldub paketis

                HBO

                Sisaldub paketis

                National Geographic keskkond

                Sisaldub paketis

                Go3 Film / Paramount+

                Sisaldub paketis

                Lastenurk

                Sisaldub paketis

                Setanta Sportsi äpp

                Sisaldub paketis

                5 ekraani

                Sisaldub paketis

                Inspira +

                Sisaldub paketis

                Salvestamine

                Sisaldub paketis </div> }

        </div>
    </div>
  )
}

export default Ilmumine