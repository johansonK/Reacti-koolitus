import React, {useState} from 'react'
import poedFailist from "../data/poed.json";


function Poed() {
    const [poed, uuendaPoed] = useState(poedFailist)

    const paneOriginaali = () => {
        uuendaPoed(poedFailist);
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

    const muudaSuurteksTahtedeks =() => {
        const tulemus = poed.map(yksPood => yksPood.toUpperCase());
        uuendaPoed(tulemus);
    }

    const muudaKoikITahedOTaheks = () => {
        const tulemus = poed.map(yksPood => yksPood.replaceAll("i", "o"))
        uuendaPoed(tulemus)
    }

    const muudaKoigileKriipsudEtte = () => {
        const tulemus = poed.map(yksPood => "--" + yksPood)
        uuendaPoed(tulemus)
    }

    const arvutaTahedKokku = () => {
        let sum = 0;        // let abil on voimalik anda muutujuale parast tema loomist uus vaartus
        //sum = sum + poed[0].length;
        //sum = sum + poed[1].length;
        //          "Kristiine" => 8 =0+8
        //           "Viimsi" =>  14  =8+6
        //            "Rocca al Mare" =>   27  =14+13
        poed.forEach(yksPood => sum = sum + yksPood.length );
        return sum;
    }

  return (

    <div>
        <div>Tahteda arv kokku : {arvutaTahedKokku()}</div>
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
        <br /><br />
        <button onClick={muudaSuurteksTahtedeks}>Muudasuurteks tahtedeks</button>
        <button onClick={muudaKoikITahedOTaheks}>Koik i muutud o</button>
        <button onClick={muudaKoigileKriipsudEtte}>Kriipsud ette</button>

        {poed.map((yksPood, jarjekorraNumber) => <div key={jarjekorraNumber}>{yksPood}</div> )}

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