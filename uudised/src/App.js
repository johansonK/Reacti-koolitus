import './App.css';
import {Route, Routes, Link} from 'react-router-dom'

function App() {
  return (
    <div>

      <Link to="/">
      <button className="avalehele">avalehele</button>
      </Link>

      <Link to="/uudised">
      <button className="Uudised">Uudised</button>
      </Link>

      <Link to="/kontakt">
      <button className="kontakt">kontakt</button>
      </Link>

      <Link to="/meist">
      <button className="meist">meist</button>
      </Link>


      <Routes>
        <Route path=' ' element={<div>See on avaleht, nahtav localhost:3001 aadressil</div>}/>
        <Route path='uudised' element={<div>See on uudisteleht, nahtav localhost:3001/uudised aadressil</div>}/>
        <Route path='kontakt' element={<div>See on kontaktide leht, nahtav localhost:3001/kontakt aadressil</div>}/>
        <Route path='meist' element={<div>See on meist leht, nahtav localhost:3001/meist aadressil</div>}/>
      </Routes>
      
    </div>
  );
}

export default App;
