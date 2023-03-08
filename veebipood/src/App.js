import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import {useState} from "react";
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import Meist from './pages/Meist';
import Seaded from './pages/Seaded';
import Poed from './pages/Poed';

// tag --> <div>   </div>   komplektide jaoks
// <img /> self-closing    tema omadused lähevadki tema sisse
// button ---> on algus ja lõpp, tema sisse kirjutatakse midagi

function App() { //window.location.href --->javascripti sissekirjutatud funktsionaalsus millega saab URLi katte
                  // .split("") tukeldab selle sona selle margi pealt
                  // [0] votab vasaku poole, [1] votab parema poole
                  // aga see koik ei toota nt firebaseis
  const [aktiivneUrl, uuendaAktiivneUrl] = useState(window.location.href.split("localhost:3000")[1]); //muidu oli ("/")
  const [hele, uuendaHele] = useState(true);
  // const [veebisaidiVarv, uuendaVeebisaidiVarv] = useState("hele");
// <button onClick={() => uuendaVeebisaidiVarv("hele")}>Hele</button>
//<button onClick={() => uuendaVeebisaidiVarv("tume")}>Tume</button>
//<button onClick={() => uuendaVeebisaidiVarv("varviline")}>Varviline</button>


  return (
    <div className={hele === true ? "hele-leht" : "tume-leht" }>
      <button onClick={() => uuendaHele(true)}>Hele</button>
      <button onClick={() => uuendaHele(false)}>Tume</button>

      <Link to="/">
        <img className="pilt" src="https://upload.wikimedia.org/wikipedia/commons/7/74/A-Cat.jpg" alt="" />
      </Link>

      <Link to="/ostukorv">
        <button className={aktiivneUrl === "/ostukorv" ? "aktiivne-url" : "nupp"} onClick={() => uuendaAktiivneUrl("/ostukorv")}>Ostukorvi</button>
      </Link>

      <Link to="/lisa-toode">
        <button className={aktiivneUrl === "/lisa-toode" ? "aktiivne-url" : "nupp"} onClick={() => uuendaAktiivneUrl("/lisa-toode")}>Toodet lisama</button>
      </Link>

      
      <Link to="/meist">
        <button className={aktiivneUrl === "/meist" ? "aktiivne-url" : "nupp"} onClick={() => uuendaAktiivneUrl("/meist")}>Meist</button>
      </Link>

      
      <Link to="/seaded">
        <button className={aktiivneUrl === "/seaded" ? "aktiivne-url" : "nupp"} onClick={() => uuendaAktiivneUrl("/seaded")}>Seaded</button>
      </Link>

      <Link to="/poed">
        <button className={aktiivneUrl === "/poed" ? "aktiivne-url" : "nupp"} onClick={() => uuendaAktiivneUrl("/poed")}>Poed</button>
      </Link>

      <Routes>
        <Route path="" element={  <Avaleht /> } />
        <Route path="ostukorv" element={  <Ostukorv/>} />
        <Route path="lisa-toode" element={  <LisaToode/>} />
        <Route path="meist" element={  <Meist/>} />
        <Route path="seaded" element={  <Seaded/>} />
        <Route path="poed" element={ <Poed/> } />
      </Routes>
    </div>
  );
}

export default App;