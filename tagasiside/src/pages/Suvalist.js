import React, { useState, useRef } from 'react'

function Suvalist() {
    const [suvad, muudaSuvad] = useState(['shoes', 'shirts', 'socks', 'sweaters', 'pigs', 'goats', 'sheep', 'spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'March', 'Jan', 'Feb', 'Dec'])
    const suvadRef = useRef();

    const kustuta = (jrkNr) => {
        suvad.splice(jrkNr, 1);
        muudaSuvad(suvad.slice());
      }

    const lisaUusSona = () => {
        suvad.push(suvadRef.current.value);
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

            <label></label>
            <input ref={suvadRef} />
            <button onClick={() => lisaUusSona()}>Lisa uus suvaline sona</button>
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