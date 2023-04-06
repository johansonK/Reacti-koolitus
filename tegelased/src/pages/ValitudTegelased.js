import {useState} from "react"
function ValitudTegelased() {

  const [valitudTegelased, uuendaValitudTegelased] = useState(
    JSON.parse(localStorage.getItem("valitudTegelased")) || []);

  return (
    <div>
      {valitudTegelased.map(tegelane =>
        <div>
          <div>{tegelane.eesnimi}</div>
          <div>{tegelane.perenimi}</div>
          <div>{tegelane.elukoht}</div>
          <div>{tegelane.vanus}</div>
        </div>
         )}
    </div>
  )
}

export default ValitudTegelased