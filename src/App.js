import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Collectors from "./Collectors";
import Gallery from "./Gallery";
import Main from "./Main";

function App() {
  return (
    <div>
      <Router>
        <div className="conteiner">
          <Link to='/' className="navBar">Главная</Link>
          <Link to='/colector' className="navBar">Коллекторы</Link>
          <Link to='/gallery' className="navBar">Галерея</Link>
        </div>

        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/colector" element={<Collectors/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
