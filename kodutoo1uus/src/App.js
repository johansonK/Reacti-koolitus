import './App.css';
import { useState, useRef } from 'react'
import { Routes, Link, Route } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Meist from './pages/Meist';
import Kontakt from './pages/Kontakt';
import Seaded from './pages/Seaded';
import Books from './pages/Books';
import Numbrid from './pages/Numbrid';

function App() {
  const [sisselogitud, muudaSisselogitud] = useState("ei");
  const [sonum, muudaSonum] = useState("");
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();

  const logiSisse = () => {
    if (paroolRef.current.value === "123") {
      muudaSisselogitud("jah");
      muudaSonum(kasutajaNimiRef.current.value + " ,oled sisselogitud");
    } else {
      muudaSonum("Vale parool")
    }
  }
  const logiValja = () => {
    muudaSisselogitud("ei");
    muudaSonum("");
  }

  //const [hele, uuendaHele] = useState(true)


  const [teineKujundus, muudaTeineKujundus] = useState(localStorage.getItem("tausta_teema"));

  const teineTumeLeht = () => {
    localStorage.setItem("tausta_teema", "tume");
    muudaTeineKujundus("tume");
  }

  const teineHeleLeht = () => {
    localStorage.setItem("tausta_teema", "hele");
    muudaTeineKujundus("hele")
  }


  
  return (
  
    <div className={teineKujundus === "tume" ? "tume" : "hele"}>

      <button onClick={teineTumeLeht}>Tume leht</button>
      <button onClick={teineHeleLeht}>Hele leht</button>
      {teineKujundus === "tume" && <div>TUME</div>}
      {teineKujundus === "hele" && <div>HELE</div>}

      

      <div>{sonum}</div>
      {sisselogitud === "ei" && <div>
        <label>Kasutajanimi</label> <br />
        <input ref={kasutajaNimiRef} type="text" /><br />
        <label>Parool</label> <br />
        <input ref={paroolRef} type="password" /><br />
      </div> }

      { sisselogitud === "ei" &&  <button onClick={logiSisse}>Logi sisse</button>} <br />
      { sisselogitud === "jah" && <button onClick={logiValja}>Logi valja</button>} <br />
      

      <button className="nupuke">Vajuta siia!</button>


      
      <p className="Oluline jutt">
        <em> Oluline jutt</em> 
      </p> <br /><br />
      <img className="pilt" src="https://lscdn.azureedge.net/products/computer/images/Dell-3048-19.5-Inch-Desktop-PC.jpg" alt="arvuti" />

      <Link to="/">
      <button className="avaleht">Avaleht</button>
      </Link>

      <Link to="/kontakt">
      <button className="kontakt">Kontakt</button>
      </Link>

      <Link to="/meist">
      <button className="meist">Meist</button>
      </Link>

      <Link to="/seaded">
      <button className="seaded">Seaded</button>
      </Link>

      <Link to="/books">
      <button className="books">Books</button>
      </Link>

      <Link to="/numbrid">
      <button className="numbrid">Numbrid</button>
      </Link>

      <br /><br />

      <Routes>
        <Route path="" element={ <Avaleht/>}/>
        <Route path="kontakt" element={ <Kontakt/> }/>
        <Route path="meist" element={ <Meist/> }/>
        <Route path="seaded" element={ <Seaded/> }/>
        <Route path="books" element={ <Books/> }/>
        <Route path="numbrid" element={ <Numbrid/> }/>

      </Routes>

    </div>
  );
}

//const [hele, uuendaHele] = useState(true)
//<div className={hele === true ? "hele-leht" : "tume-leht"}>
//<button onClick={() => uuendaHele(true)}>Hele</button>
//<button onClick={() => uuendaHele(false)}>Tume</button>
//{teineKujundus === true && localStorage.getItem("tausta_teema")}
//{teineKujundus === false && localStorage.getItem("tausta_teema")}


export default App;