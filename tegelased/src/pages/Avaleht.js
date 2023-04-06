import {useState} from "react";

function Avaleht() {
    
   const tegelased = [
        {eesnimi: "Mickey", perenimi: "Mouse", elukoht: "Disneyland", vanus: 21 },
        {eesnimi: "Minnie", perenimi: "Mouse", elukoht: "Disneyland", vanus: 19 },
        {eesnimi: "Winnie", perenimi: "Pooh", elukoht: "Hundred Acre Wood", vanus: 30 },
        {eesnimi: "Roo", perenimi: "Kangaroo", elukoht: "Hundred Acre Wood", vanus: 4 },
        {eesnimi: "Scooby", perenimi: "Doo", elukoht: "Cristal Cove", vanus: 7 }
    ]

    const [klikitudNimi, uuendaKlikitudNimi] = useState("");

    const kuvaNimi = (tegelane) => {
       // console.log(tegelane.eesnimi);
       uuendaKlikitudNimi(tegelane.eesnimi);
    }

    const valiTegelane = (klikitudTegelane) => {
        const valitud = JSON.parse(localStorage.getItem("valitudTegelased")) || [];
        valitud.push(klikitudTegelane);
        localStorage.setItem("valitudTegelased", valitud);
        
    }

  return (
    <div>
        {klikitudNimi !== "" && <div>Klikkisid tegelase {klikitudNimi} peale</div>}
        {tegelased.map((tegelane, index) =>
        <div key={index}>
            <div>{tegelane.eesnimi}</div>
            <div>{tegelane.perenimi}</div>
            <div>{tegelane.elukoht}</div>
            <div>{tegelane.vanus}</div>
            <button onClick={() => kuvaNimi(tegelane)}>Kuva nimi</button>
            <button onClick={() => valiTegelane(tegelane)}>Vali</button>
        </div>
        )
        }
        <br />
        -----------------------------------------------
        <br /><br />

        <div>
            <div>Mickey</div>
            <div>Mouse</div>
            <div>Disneyland</div>
        </div>
        <div>
            <div>Minnie</div>
            <div>Mouse</div>
            <div>Disneyland</div>
        </div>
        <div>
            <div>Winnie</div>
            <div>Pooh</div>
            <div>Hundred Acre Wood</div>
        </div>
        <div>
            <div>Roo</div>
            <div>Kangaroo</div>
            <div>Hundred Acre Wood</div>
        </div>
        <div>
            <div>Scooby</div>
            <div>Doo</div>
            <div>Crystal Cove</div>
        </div>
    </div>
  )
}

export default Avaleht