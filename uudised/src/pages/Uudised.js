import {Link} from "react-router-dom"


function Uudised() {

  const uudised = JSON.parse(localStorage.getItem("uudised")) || [];

  return (
  <div>
      <div> See on uudisteleht, nahtav localhost:3001/uudised aadressil</div>
      {uudised.length === 0 && <div> Ühtegi uudist hetkel pole! Peagi lisame uudised</div>}
      {uudised.map((yksUudis, index) => 
      <div key={index} >
        <Link to={"/uudis/" + index}>
        <div>{yksUudis}</div>
        </Link>
      </div>)}
  </div>)
}

export default Uudised