import React, {useState} from 'react'
import tegevusedFailist from "../tegevused.json"

function Tegevused() {
    const [tegevused, muudaTegevused] = useState(tegevusedFailist);

    const naitaKasutajaYks = () => {
      const vastus = tegevused.filter(yksTegevus => yksTegevus.userId ===1);
      muudaTegevused(vastus);
    }

    const naitaKasutajaKaks = () => {
      const vastus = tegevused.filter(yksTegevus => yksTegevus.userId ===2);
      muudaTegevused(vastus);
    }

    const naitaKasutajaKolm = () => {
      const vastus = tegevused.filter(yksTegevus => yksTegevus.userId ===3);
      muudaTegevused(vastus);
    }

    const naitaKoiki = () => {
      muudaTegevused(tegevusedFailist);
    }

    const naitaValmis = () => {
      const vastus = tegevused.filter(yksTegevus => yksTegevus.completed === true);
      muudaTegevused(vastus);
    }

    const naitaMitteValmis = () => {
      const vastus = tegevused.filter(yksTegevus => yksTegevus.completed === false);
      muudaTegevused(vastus);
    }

    const naitaTAlgavad = () => {
      const vastus = tegevused.filter(yksTegevus => yksTegevus.title[0] === "t");
      muudaTegevused(vastus);
    }

    const tahtiRohkem20 = () => {
      const vastus = tegevused.filter(yksTegevus => yksTegevus.title.length > 20);
      muudaTegevused(vastus);
    }

  return (
    <div>
    <div>Kogu tegevuse\te arv: {tegevused.length}</div>
    <button onClick={() => naitaKasutajaYks()}>Koik kasutaja ID 1 tegevused</button>
    <button onClick={() => naitaKasutajaKaks()}>Koik kasutaja ID 2 tegevused</button>
    <button onClick={() => naitaKasutajaKolm()}>Koik kasutaja ID 3 tegevused</button>
    <button onClick={() => naitaValmis()} >Koik valmis tegevused</button>
    <button onClick={() => naitaMitteValmis()}>Koik mittevalmis tegevused</button>
    <button onClick={() => naitaTAlgavad()}>Koik "t" algavad tegevused</button>
    <button onClick={() => tahtiRohkem20()}>Tegevused, millel on tahemarke rohkem kui 20</button>
    <button onClick={() => naitaKoiki()}>Koik tegevused tagasi</button>
    {tegevused.map(yksTegevus => 
       <div>
        <div>{yksTegevus.userId}</div>
        <div>{yksTegevus.id}</div>
        <div>{yksTegevus.title}</div>
        <div>{yksTegevus.completed}</div>
        <br />
       </div>)}
    </div>
  )
}

export default Tegevused