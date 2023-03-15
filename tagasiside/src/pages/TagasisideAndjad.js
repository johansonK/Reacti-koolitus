import React, {useState, useRef} from 'react'
import nimedFailist from "../nimed.json"

export default function TagasisideAndjad() {

    const [tagasisideAndjad, uuendaTagasisideAndjad] = useState(nimedFailist);
    const tagasisideAndjaRef = useRef();


    //const sorteeriSonaArv = () => {
     //   raamatud.sort((a,b) => a.length >b.length )
     //   uuendaRaamatud (raamatud.slice()) //vaja muuta
    //}

    const filtreeriM = () => {
        const tulemus = tagasisideAndjad.filter (yksAndja => yksAndja.startsWith("M"));
        uuendaTagasisideAndjad(tulemus);
    }

    const filtreeri6kohalised = () => {
        const tulemus = tagasisideAndjad.filter (yksAndja => yksAndja.length === 6);
        uuendaTagasisideAndjad(tulemus);    
    }

    const filtreeriY = () => {
      const tulemus = tagasisideAndjad.filter (yksAndja => yksAndja.endsWith("y"));
      uuendaTagasisideAndjad(tulemus);
    }

   const sorteeriAZ = () => {
     tagasisideAndjad.sort ();
     uuendaTagasisideAndjad(tagasisideAndjad.slice());
    }

    const lisaEST = () => {
      const tulemus = tagasisideAndjad.map(yksAndja => "EST-" + yksAndja);
      uuendaTagasisideAndjad(tulemus);
    }


    const kustuta = (index) => {
      tagasisideAndjad.splice(index, 1);
      uuendaTagasisideAndjad(tagasisideAndjad.slice());
    }

    const lisaUusTagasisideAndja = () => {
      tagasisideAndjad.push(tagasisideAndjaRef.current.value);
      uuendaTagasisideAndjad(tagasisideAndjad.slice());
  }

  return (
    <div>
      <div>Nimekirjas on: {tagasisideAndjad.length} tk </div>
    
    <button onClick={filtreeriM}>Filtreeri valja "M"ga algavad</button>
    <button onClick={filtreeri6kohalised}>Filtreeri valja 6kohalised</button>
    <button onClick={filtreeriY}>Filtreeri valja "y"ga loppevad</button>
    <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
    <button onClick={lisaEST}>Lisa EST-</button>

    <label></label>
        <input ref={tagasisideAndjaRef} />
        <button onClick={() => lisaUusTagasisideAndja()}>Lisa tagasisideandja</button>


        
    {tagasisideAndjad.map((yksAndja, jrkNr) => 
        <div key={jrkNr}>
          {yksAndja}
          <button onClick={() => kustuta(jrkNr)}>x</button>
        </div> )}

        

    </div>
  )
}
