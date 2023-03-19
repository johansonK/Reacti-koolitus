import React, { useState } from 'react'

function Suvalist() {
    const [suvad, muudaSuvad] = useState(['shoes', 'shirts', 'socks', 'sweaters', 'pigs', 'goats', 'sheep', 'spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'March', 'Jan', 'Feb', 'Dec'])
    

    const kustuta = (jrkNr) => {
        suvad.splice(jrkNr, 1);
        muudaSuvad(suvad.slice());
      }

    const lisaUusSona = () => {
        suvad.push("chickens", "cats", "dogs");
        muudaSuvad(suvad.slice());
    }

    const sorteeriAZ = () => {
        suvad.sort();
        muudaSuvad(suvad.slice());
    }

    const filtreeriRoh4 = () => {
        const tulemus = suvad.filter(yksSona => yksSona.length > 4);
        muudaSuvad(tulemus);
    }

    return (
        <div>

            <div>Nimekirjas on: {suvad.length} tk</div>

           
            <button onClick={() => lisaUusSona()}>Lisa chickens, cats, dogs</button>
            <button onClick={sorteeriAZ}>Sordi tahestikujarjekorras</button>
            <button onClick={filtreeriRoh4}>Jata alles rohkem kui 4tahelised</button>

            {suvad.map((yksSona, index) => 
            <div key={index}>
                {yksSona}
                <button onClick={() => kustuta (index)}>X</button>
            </div>)}

        </div>
    )
}

export default Suvalist