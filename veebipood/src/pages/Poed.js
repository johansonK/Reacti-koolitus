import React, {useState} from 'react'


function Poed() {
    const [poed, uuendaPoed] = useState(["Ulemiste","Viimsi","Rocca al Mare","Magistrali","Vesse","Kristiine","Jarveotsa" ])

    const paneOriginaali = () => {
        uuendaPoed(["Ulemiste","Viimsi","Rocca al Mare","Magistrali","Vesse","Kristiine","Jarveotsa" ]);
    }

    const sorteeriAZ = () => {
        poed.sort(); //tavaline .sort() teeb alati A-Z
        uuendaPoed(poed.slice()); // slice() loige - loikab ara parinevuskoha
    }

    const sorteeriZA = () => {
        poed.sort((a,b) => b.localeCompare(a));
        uuendaPoed(poed.slice());
    }

    const sorteeriPikkusKasv = () => {
        poed.sort((a,b) => a.length - b.length);
        uuendaPoed(poed.slice());
    }

    const sorteeriPikkusKah = () => {
        poed.sort((a,b) => b.length - a.length); // kui vastupidi, vahetan a ja b asukoha ara
        uuendaPoed(poed.slice());
    }

    const sorteeriAZKolmas = () => {
        poed.sort((a,b) => a[2].localeCompare(b[2])); // jarjakorra nr algab nullist 012345
        uuendaPoed(poed.slice());
    }

    const filtreeriEgaLoppevad = () => {
        const tulemus = poed.filter(yksPood => yksPood.endsWith("e")) //vasakule poole noolt kuidas tahistan uhte elementi
        uuendaPoed(tulemus);                           //paremale poole ,millisel tingimusel jatan ta alles
    }
    const filtreeriVah7Tahelised = () => {
        const tulemus = poed.filter(yksPood => yksPood.length >= 7);
        uuendaPoed(tulemus);  
    }

    const filtreeri9Tahelised = () => {
        const tulemus = poed.filter(yksPood => yksPood.length === 9);
        uuendaPoed(tulemus); 
    }

    const filtreeriIsSisaldavad = () => {
        const tulemus = poed.filter(yksPood => yksPood.includes("is"));
        uuendaPoed(tulemus); 
    }

    const filtreeriKolmasTahtI = () => {
        const tulemus = poed.filter(yksPood => yksPood[2] === "i");
        uuendaPoed(tulemus); 
    }

  return (

    <div>
        <button onClick={paneOriginaali}>Tagasi orginaali</button>
        <br /><br />
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriPikkusKasv}>Sorteeri sona pikkus kasvavalt</button>
        <button onClick={sorteeriPikkusKah}>Sorteeri sona pikkus kahanevalt</button>
        <button onClick={sorteeriAZKolmas}>Sorteeri A-Z kolmanda tahe jargi</button>
        <br /><br />
        <button onClick={filtreeriEgaLoppevad}>Filtreeri e'ga loppevad</button>
        <button onClick={filtreeriVah7Tahelised}> Filtreeri vahemalt 7tahelised</button>
        <button onClick={filtreeri9Tahelised}>Filtreeri tapselt 9tahelised</button>
        <button onClick={filtreeriIsSisaldavad}>Filtreeri sisaldab luhendit 'is'</button>
        <button onClick={filtreeriKolmasTahtI}>Filtreeri kolmas taht 'i'</button>

        {poed.map(yksPood => <div>{yksPood}</div> )}

        <div>------------------</div>
        <div>Ulemiste</div>
        <div>Viimsi</div>
        <div>Rocca al Mare</div>
        <div>Magistrali</div>
        <div>Vesse</div>
        <div>Kristiine</div>
        <div>Jarveotsa</div>
    </div>
  )
}

export default Poed