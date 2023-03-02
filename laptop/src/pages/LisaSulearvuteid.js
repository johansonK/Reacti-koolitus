import { useState } from 'react';


function LisaSulearvuteid() {
    const [message, setMessage] = useState("Lisa arvuti!")
    const [naitaNuppu, uuendaNaitaNuppu] = useState(true);

    function addProduct(){
        setMessage("Arvuti lisatud");
        uuendaNaitaNuppu(false);


    }
  return (
    <div>
        <div>Sonum: {message}</div>
        <label >Mark</label> <br />
        <input type="text" /> <br />
        <label >Mudel</label> <br />
        <input type="text" /> <br />
        <label >Maksumus</label> <br />
        <input type="number" /> <br />
        { naitaNuppu === true && <button onClick={() => addProduct()} >Sisesta</button>}
      
    </div>
  )
}

export default LisaSulearvuteid