import React, { useState, useRef } from 'react'

function Tagasiside() {

    const [tagasisided, muudaTagasisided] = useState(["Oli hea", "Huvitav", "Teistsugune", "Ponev"]);
    const tagasisideRef = useRef();

    const kustuta = (jarjekorraNr) => {
        tagasisided.splice(jarjekorraNr, 1);
        muudaTagasisided(tagasisided.slice());
    }

    const lisaUusTagasiside = () => {
        tagasisided.push(tagasisideRef.current.value);
        muudaTagasisided(tagasisided.slice());
    }


    return (
        <div>

            {tagasisided.map((yksTagasiside, jrkNr) => 
                <div key={jrkNr}>
                    {yksTagasiside}
                    <button onClick={() => kustuta(jrkNr)}>x</button>
                </div>)}

                <label></label>
                <input ref={tagasisideRef} />
                <button onClick={() => lisaUusTagasiside()}>Lisa tagasiside</button>

        </div>
    )
}

export default Tagasiside