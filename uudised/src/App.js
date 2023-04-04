import {Route, Routes, Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import './App.css';
import Avalehele from './pages/Avalehele';
import Uudised from './pages/Uudised';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import LisaUudis from './pages/LisaUudis';
import HaldaUudiseid from './pages/HaldaUudiseid';
import YksUudis from './pages/YksUudis';
import MuudaUudis from './pages/MuudaUudis';

function App() {
  return (
    <div>

      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Uudised</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Avalehele</Nav.Link>
            <Nav.Link as={Link} to="/uudised">Uudised</Nav.Link>
            <Nav.Link as={Link} to="/kontakt">Kontakt</Nav.Link>
            <Nav.Link as={Link} to="/meist">Meist</Nav.Link>
            <Nav.Link as={Link} to="/lisa-uudis">Lisa uudis</Nav.Link>
            <Nav.Link as={Link} to="/halda">Halda uudiseid</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



      <Routes>
        <Route path="" element={ <Avalehele/>}/>
        <Route path="uudised" element={ <Uudised/> }/>
        <Route path="kontakt" element={ <Kontakt/> }/>
        <Route path="meist" element={ <Meist/> }/>
        <Route path="lisa-uudis" element={ <LisaUudis/> } />
        <Route path="halda" element={<HaldaUudiseid/>}  />
        <Route path="uudis/:index" element={<YksUudis/>}  />
        <Route path="muuda/:index" element={<MuudaUudis/>}  />
      </Routes>
      
    </div>
  );
}

export default App;
