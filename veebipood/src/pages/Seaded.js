import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';


//tumesinine - JS liigitusega: const, function
//              vaartus, millel pole jutumarke: true, false, null, undefined
//              HTML: tag - img, input, div, button
//sinine - muutuja, mida muudetakse ja mida kasutatakse HTML-is: kogus, sonum, laigitud, inputiLuger, keel, viide
//helesinine - JS sissekirjutatud muutuja (mille kaudu saab funktsioone teha)
//              localStorage (.getItem, .setItem), console (.log), JSON (.stringify, .parse)
//              HTML sissekirjutatud tagi omadused  src="", className="", onClick="", alt="", type=""
//kollane - koik funk
//oranz - jutumarkides vaartused
//valge - igasugused margid
//sulud: loogelised, tavalised, kandilised --- on kollased, lillad, sinised
//      visual studio code-s on sisseehitatud, et samat varvi sulg paneb kinni samaat varvi sulu
//tumeroheline - kommentaar

function Seaded() {
    const [keel, uuendaKeel] = useState(localStorage.getItem("keel"));
    const emailViide = useRef();
    const telefonViide = useRef();
    const aadressRef = useRef();

    //aadressRef voib olla mis iganes, ka lihtsalt uks taht, aga useRef peab olema useRef

    //valiku kusimus, kas teha 1 voi 3 funktsiooni
    //kui onClick on .map() sees, siis PEAN TEGEMA 1 funktsiooni, mis sulgude seest votab muutuja

    //const muudaKeelEst = () => {
      //  uuendaKeel("est")
        //localStorage.setItem("keel", "est");
    //}
    //const muudaKeelEng = () => {
      //  uuendaKeel("eng")
        //localStorage.setItem("keel", "eng");
    //}
    //const muudaKeelRus = () => {
      //  uuendaKeel("rus")
        //localStorage.setItem("keel", "rus");
    //}

    const muudaKeel = (uusKeel) => {
         uuendaKeel(uusKeel)
        localStorage.setItem("keel", "uusKeel");
    }

    const salvestaEmail = () => {
        if (emailViide.current.value.includes("@") === false) {
            toast.error("Kontrolli e-mail!");
        } else  {
            toast.success("Email salvestatud!");
            localStorage.setItem("email", emailViide.current.value);
        }
        //koik, mida saab sonadega (string) teha https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
    }

    //js check if string is number only
    //stackoverflow.com saab uurida vastuseid kusimustele
    //regex (regular expression --- regulaaravaldis)
    const salvestaTelefon = () => {
        if (/^\d+$/.test(telefonViide.current.value)=== false) {
            toast.error("Telefoninr ei koosne ainult numbritest");
        } else {
            toast.success("Telefon salvestatud");
            localStorage.setItem("telefon", telefonViide.current.value);
        }
    }

    const salvestaAadress = () => {
        //salvestab ara brauseri malusse ainult minu arvutis samal veebilehel samas brauseris
        if (aadressRef.current.value[0] === aadressRef.current.value[0].toLowerCase()) {
            toast.error("Aadress kirjuta suure tahega");
        } else {
        toast.success("Aadress salvestatud!");
        localStorage.setItem("aadress", aadressRef.current.value);
        }
    }

// voi ilma   const muudaKeelEst = () => {uuendaKeel("est"), siis on 
//<button onClick={() => uuendaKeel("est")} >Eesti keelseks</button> 

  return (
    <div>
        <br />
        <label>Email</label>
        <input ref={emailViide} type="text" />
        <button onClick={salvestaEmail}>Sisesta</button>
        <br />
        <label>Telefoninumber</label>
        <input ref={telefonViide} type="text" />
        <button onClick={salvestaTelefon}>Sisesta</button>
        <br />
        <label>Aadress</label>
        <input ref={aadressRef} type="text" />
        <button onClick={salvestaAadress}>Sisesta</button>
        <br /><br />
        <button onClick={()=> muudaKeel("est")} >Eesti keelseks</button> 
        <button onClick={() => muudaKeel ("eng")}>Inglise keelseks</button>
        <button onClick={() => muudaKeel("rus")}>Vene keelseks</button>
        { keel === "est" && <div>Leht on eesti keeles</div>}
        { keel === "eng" && <div>Page is in English</div>}
        { keel === "rus" && <div>Pycckij Rsok</div>}
        <ToastContainer
        position='bottom-right'
        theme="dark"
        />
    </div>
  )
}
// <ToastContainer/> voib paikneda kus iganes koodis

//<button onClick={muudaKeelEst} >Eesti keelseks</button> 
  //      <button onClick={muudaKeelEng}>Inglise keelseks</button>
    //    <button onClick={muudaKeelRus}>Vene keelseks</button>
export default Seaded