import { Link , Routes,Route} from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/Home.page";
import { RqSuperHero } from "./components/RqSuperheroes.page";
import { Superhero } from "./components/Superheroes.page";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rqsuperheroes">RqSuperHeroes</Link>
          </li>
          <li>
            <Link to="/superheroes">Super Heroes</Link>
          </li>
        </ul>
      </nav>

      <Routes>
          <Route index element={<HomePage />} />
          <Route path="rqsuperheroes" element={<RqSuperHero />} />
          <Route path="superheroes" element={<Superhero />} />
          <Route path="*" element={<HomePage />} />
      </Routes>
   
    </div>
  );
}

export default App;
