import {Link, Route, Routes} from 'react-router-dom';
import './App.css';
import Work from './pages/Work';
import Hobbies from './pages/Hobbies';
import Courses from './pages/Courses';

function App() {
  return (
    <div className="App">
      <img className="main-picture" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Best-Programming-Languages-to-Start-Learning-Today.jpg" alt="" />
      <div className="rectangle"></div>

      <div className="navigation-pictures">
        <Link className="main-link" to="work">
          <img src="https://miro.medium.com/max/960/1*QeZ3O-E-cmARACu-PY3b6w.jpeg" alt="" />
          <p>Tööde lehele</p>
        </Link>

        <Link className="main-link" to="hobbies">
          <img src="https://cdn.britannica.com/61/74061-050-47B62C0E/computer-peripherals-images-laser-printer-inkjet-layout.jpg" alt="" />
          <p>Hobbide lehele</p>
        </Link>

        <Link className="main-link" to="courses">
          <img src="https://m.media-amazon.com/images/I/61yoxQzRwPL.jpg" alt="" />
          <p>Kursuste lehele</p>
        </Link>
      </div>
      

      <iframe width="560" height="315" src="https://www.youtube.com/embed/9OhUJyF1bYo?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      <Routes>
       <Route path="work" element={ <Work/> } />
       <Route path="hobbies" element={ <Hobbies/>} />
       <Route path="courses" element={ <Courses/> } />
      </Routes>

      <a className="facebook-button" href="https://www.facebook.com/jee">
        <img src="/facebook.png" alt="" />
        <span>Facebook</span>
        </a>
    </div>

  );
}

export default App;
