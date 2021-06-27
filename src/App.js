import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pokemons from "./pages/pokemons";
import SinglePokemon from "./pages/singlePokemon";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Pokemons />
          </Route>
          <Route path="/:name">
            <SinglePokemon />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
