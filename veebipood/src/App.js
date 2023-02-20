import './App.css';

import { Link, Route, Routes } from 'react-router-dom';
// tag --> <div>   </div>   komplektide jaoks
// <img /> self-closing    tema omadused lähevadki tema sisse
// button ---> on algus ja lõpp, tema sisse kirjutatakse midagi

function App() {
  return (
    <div className="App">
      <Link to="/avaleht">
        <img className="pilt" src="https://upload.wikimedia.org/wikipedia/commons/7/74/A-Cat.jpg" alt="" />
      </Link>

      <Link to="/ostukorv">
        <button className="nupp">nupp</button>
      </Link>

      <Link to="/lisa-toode">
        <button className="nupp">Toodet lisama</button>
      </Link>

      <Routes>
          <Route path="avaleht" element={<div>123</div>}/>
          <Route path="ostukorv"element={<div>0</div>}/>
          <Route path="lisa-toode"element={<div>LT</div>}/>
      </Routes>
    </div>
  );
}

export default App;
