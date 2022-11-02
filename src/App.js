import { Link , Routes,Route} from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/Home.page";
import { RqSuperHero } from "./components/RqSuperheroes.page";
import { Superhero } from "./components/Superheroes.page";
import {QueryClientProvider,QueryClient} from "react-query"

const client = new QueryClient() ;

function App() {
  return (
    <QueryClientProvider client={client}>
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
    </QueryClientProvider>
  );
}

export default App;
