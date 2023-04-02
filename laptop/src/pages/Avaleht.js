
function Avaleht() {

  const arvutid = JSON.parse(localStorage.getItem("laptop")) || [];

  const lisaOstukorvi = (valitudToode) => {
    const ostukorv = JSON.parse(localStorage.getItem("ostukorvLaptop")) || [];
    ostukorv.push(valitudToode);
    localStorage.setItem("ostukorvLaptop", JSON.stringify(ostukorv));
  }
  

  return (
    <div className="avaleht-text">
        <div>Tere</div> <br /><br />
        <div>Siin lehel saad sulearvuteid vaadata ja lisada</div>
        {arvutid.map((yksArvuti, index) => 
          <div key={index}>
            <div>{yksArvuti.mark}</div>
            <div>{yksArvuti.mudel}</div>
            <div>{yksArvuti.maksumus} </div>
            <button onClick={() => lisaOstukorvi(yksArvuti)}>Lisa ostukorvi</button>
          </div>
          )}
    </div>
  ) 
}

export default Avaleht