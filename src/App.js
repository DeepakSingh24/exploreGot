import React from "react";
import { Character } from "./features/character/Character";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import { CharacterView } from "./CharacterView";
import { Books } from "./features/books/Books";
import { House } from "./features/houses/House";
import { useHistory } from "react-router-dom";
import { HouseView } from "./features/houses/HouseView";
import { BookView } from "./features/books/BookView";

function App() {
  const history = useHistory();
  return (
    <div className="app">
      <Router history={history}>
        <nav className="app__item">
          <div className="app__items">
            <Link to="/">Characters</Link>
          </div>
          <div className="app__items">
            <Link to="/houses">Houses</Link>
          </div>
          <div className="app__items">
            <Link to="/books">Books</Link>
          </div>
        </nav>

        <Switch>
          <Route path="/" exact component={Character} />
          <Route path="/CharacterView" component={CharacterView} />
          <Route path="/books" component={Books} />
          <Route path="/houses" component={House} />
          <Route path="/viewHouse" component={HouseView} />
          <Route path="/viewBook" component={BookView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
