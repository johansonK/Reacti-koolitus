import React, {useState} from 'react'

function Books() {

    const [raamatud, uuendaRaamatud] = useState (["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Harry Potter", "Alice in Wonderland"]);

    const paneOrginaali = () => {
        uuendaRaamatud (["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Harry Potter", "Alice in Wonderland"])
    }


    const sorteeriAZ = () => {
        raamatud.sort ()
        uuendaRaamatud (raamatud.slice())
    }

    const sorteeriZA = () => {
        raamatud.sort ((a,b) => b.localeCompare (a))
        uuendaRaamatud (raamatud.slice())
    }

    const sorteeriPikkus = () => {
        raamatud.sort ((a,b) => a.length - b.length )
        uuendaRaamatud (raamatud.slice())
    }

    const sorteeriSonaArv = () => {
        raamatud.sort ()
        uuendaRaamatud (raamatud.slice()) //vaja muuta
    }

    const filtreeriThe = () => {
        const tulemus = raamatud.filter (yksRaamat => yksRaamat.startsWith("The"));
        uuendaRaamatud(tulemus);
    
    }

    const filtreeriAnd = () => {
        const tulemus = raamatud.filter (yksRaamat => yksRaamat.includes ("and")); //vaja muuta
        uuendaRaamatud(tulemus);
    
    }

    const filtreeriRohkem10Tah = () => {
        const tulemus = raamatud.filter (yksRaamat => yksRaamat.length >= 10);
        uuendaRaamatud(tulemus);
    
    }

    const filtreeriVahem7Tah = () => {
        const tulemus = raamatud.filter (yksRaamat => yksRaamat.length <= 7);
        uuendaRaamatud(tulemus);
    
    }
    
  return (
    <div>

    <button onClick={paneOrginaali}>Pane orginaali</button>
    <br />
    <button onClick={vaiksedTahed}>Koik tahed vaiksed</button>
    <button onClick={suuredTahed}>Koik tahed suured</button>
    <button onClick={loppuPunkt}>Lisa loppu punkt</button>
    <button onClick={loppuHuumark}>Lisa loppu "!"</button>
    <br />
    <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
    <button onClick={sorteeriZA}>Sorteeri Z-A</button>
    <button onClick={sorteeriPikkus}>Sorteeri pikkuse jargi</button>
    <button onClick={sorteeriSonaArv}>Sorteeri sonade arvu jargi</button>
    <br />
    <button onClick={filtreeriThe}>Filtreeri valja "The"ga algavad</button>
    <button onClick={filtreeriAnd}>Filtreeri valja "and"ga keskel</button>
    <button onClick={filtreeriRohkem10Tah}>Filtreeri valja rohkem kui 10tahelised pealkirjad</button>
    <button onClick={filtreeriVahem7Tah}>Filtreeri valja vahem kui 7tahelised pealkirjad</button>

    {raamatud.map(yksRaamatud => <div>{yksRaamatud}</div> )}


    </div>
  )
}

export default Books