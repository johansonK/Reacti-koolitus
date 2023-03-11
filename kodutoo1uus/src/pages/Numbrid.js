import React, { useState} from 'react'

function Numbrid() {

    const [numbrid, uuendaNumbrid] = useState ([4, 23, 7, 39, 19, 0, 9, 14, 75, 44])

    const paneOrginaali = () => {
        uuendaNumbrid([4, 23, 7, 39, 19, 0, 9, 14, 75, 44])
    }

    const korruta2 = () => {
        const tulemus = numbrid.map(x=>x*2);
        uuendaNumbrid (tulemus);

    }

    const jaga3 = () => {
        const tulemus = numbrid.map(x=>x/3);
        uuendaNumbrid (tulemus);

    }

    const liida10 = () => {
        const tulemus = numbrid.map(x=>x+10);
        uuendaNumbrid (tulemus);

    }

    const lahuta1 = () => {
        const tulemus = numbrid.map(x=>x-1);
        uuendaNumbrid (tulemus);

    }

    const sortEsimeneNrKasv = () => {
        numbrid.sort ((a,b) => a.toString().localeCompare(b.toString()));
        uuendaNumbrid (numbrid.slice());
    }

    const sortEsimeneNrKah = () => {
        numbrid.sort ((a,b) => b.toString().localeCompare(a.toString()));
        uuendaNumbrid (numbrid.slice());
    }

    const sortKasvavalt = () => {
        numbrid.sort ((a,b) => a-b);
        uuendaNumbrid (numbrid.slice());
    }

    const sortKahanevalt = () => {
        numbrid.sort ((a,b) => b-a);
        uuendaNumbrid (numbrid.slice());
    }

    const filtreeriSuurem8 = () => {
        const tulemus = numbrid.filter (e => e>8);
        uuendaNumbrid (tulemus);
    }

    const filtreeriVaiksem10 = () => {
        const tulemus = numbrid.filter (e => e<10);
        uuendaNumbrid (tulemus);
    }

    const filtreeriPaaris = () => {
        const tulemus = numbrid.filter (e => e%2===0);
        uuendaNumbrid (tulemus);
    }

    const filtreeriPaaritud = () => {
        const tulemus = numbrid.filter (e => e%2===1);
        uuendaNumbrid (tulemus);
    }

    

  return (
    <div>

    <button onClick={paneOrginaali}>Pane orginaali</button>
    <br />
    <button onClick={korruta2}>Korruta koik 2-ga</button>
    <button onClick={jaga3}>Jaga koik 3-ga</button>
    <button onClick={liida10}>Liida 10</button>
    <button onClick={lahuta1}>Lahuta 1</button>
    <br />
    <button onClick={sortEsimeneNrKasv}>Sorteeri esimese nr jargi kasvavalt</button>
    <button onClick={sortEsimeneNrKah}>Sorteeri esimese nr jargi kahanevalt</button>
    <button onClick={sortKasvavalt}>Sorteeri kasvavalt</button>
    <button onClick={sortKahanevalt}>Sorteeri kahanevalt</button>
    <br />
    <button onClick={filtreeriSuurem8}>Filtreeri suuremad kui 8</button>
    <button onClick={filtreeriVaiksem10}>Filtreeri vaiksemad kui 10</button>
    <button onClick={filtreeriPaaris}>Filtreeri paarisarvud</button>
    <button onClick={filtreeriPaaritud}>Filtreeri paaritud arvud</button>
    <br />
    


    {numbrid.map(yksNumber => <div>{yksNumber}</div> )}

    </div>
  )
}

export default Numbrid