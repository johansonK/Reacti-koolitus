import { useState, useRef } from 'react';


function LisaSulearvuteid() {
    const [message, setMessage] = useState("Lisa arvuti!")
    //const [naitaNuppu, uuendaNaitaNuppu] = useState(true);
    const markRef = useRef();
    const mudelRef = useRef();
    const maksumusRef = useRef();


    function addProduct(){
        setMessage("Arvuti lisatud");
     //  uuendaNaitaNuppu(false);
 
    const uusArvuti = {
      "mark": markRef.current.value,
      "mudel": mudelRef.current.value,
      "maksumus": maksumusRef.current.value,
    }

    const arvutid = JSON.parse(localStorage.getItem("laptop")) || [];
    arvutid.push(uusArvuti);
    localStorage.setItem("laptop", JSON.stringify(arvutid));


    }
  return (
    <div>
        <div>Sonum: {message}</div>
        <label >Mark</label> <br />
        <input ref={markRef} type="text" /> <br />
        <label >Mudel</label> <br />
        <input ref={mudelRef} type="text" /> <br />
        <label >Maksumus</label> <br />
        <input ref={maksumusRef} type="number" /> <br />
        { message === "Lisa arvuti!" && <button onClick={() => addProduct()} >Sisesta</button>}
      
    </div>
  )
}

export default LisaSulearvuteid