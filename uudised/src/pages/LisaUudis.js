import {useRef} from "react";

function LisaUudis() {

    const uudiseRef = useRef();

    const lisaUusUudis = () => {
        const uudised = JSON.parse(localStorage.getItem("uudised")) || [];
        uudised.push(uudiseRef.current.value);
        localStorage.setItem("uudised", JSON.stringify(uudised));
        //v6i
        //let uudised = localStorage.getItem("uudised"); //localstoragest k2tte saamine
        //uudised = JSON.parse(uudised) || [];// jutum2rkide 2ra v6tmine
        //uudised.push(uudiseRef.current.value);//uudise lisamine
        //uudised = JSON.stringify(uudised); //jutum2rkide tagasipanemine
        //localStorage.setItem("uudised", uudised); //localStoragesse tagasi panemine

    }

    return (
        <div>
            <label >Uudise nimi</label>
            <input ref={uudiseRef} type="text" />
            <button onClick={lisaUusUudis}>Lisa uudis</button>
        </div>
      );
}

export default LisaUudis;