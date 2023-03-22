import React, {useState} from 'react';
import {Link} from "react-router-dom";
import ostukorvFailist from "../data/ostukorv.json";
import tootedFailist from "../data/tooted.json";

function Tooted() {
    const [tooted, uuendaTooted] = useState(tootedFailist);

    const sorteeriAZ = () => {
      tooted.sort((a,b) => a.nimi.localeCompare(b.nimi));
      uuendaTooted(tooted.slice());
    }

    const sorteeriZA = () => {
      tooted.sort((a,b) => b.nimi.localeCompare(a.nimi));
      uuendaTooted(tooted.slice())
    }

    const lisaOstukorvi = (klikitudToode) => {
        ostukorvFailist.push(klikitudToode);
    }

    const sorteeriHindKasv = () => {
      tooted.sort((a,b) => a.hind - b.hind);
      uuendaTooted(tooted.slice());
    }

    const sorteeriHindKah = () => {
      tooted.sort((a,b) => b.hind - a.hind);
      uuendaTooted(tooted.slice());
    }

    const filtreeriEsiTaheAlusel = (esitaht) => {
      const vastus = tootedFailist.filter( toode => toode.nimi[0] === esitaht )
      uuendaTooted(vastus)
    }

  return (
    <div>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriHindKasv}>Sorteeri hinna jargi kasvavalt</button>
      <button onClick={sorteeriHindKah}>Sorteeri hinna jargi kahanevalt</button>
      <button onClick={() => filtreeriEsiTaheAlusel("B")}>B</button>
      <button onClick={() => filtreeriEsiTaheAlusel("A")}>A</button>
      <button onClick={() => filtreeriEsiTaheAlusel("N")}>N</button>
      {tooted.map((toode, jarjekorraNr) => 
          <div key={jarjekorraNr}>
              <Link to={"/yksik/" + jarjekorraNr}>
                <img className="pilt" src={toode.pilt} alt="" />
                <div>{toode.nimi}</div>
                <div>{toode.hind}</div>
              </Link>
              <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
          </div>)}
    </div>
  )
}

export default Tooted