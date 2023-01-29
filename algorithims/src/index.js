import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Sort from "./Sort";
import BubbleSort from "./BubbleSort";
import InsertionSort from "./InsertionSort";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/sort">Sort Test</Link>
            </li>
            <li>
              <Link to="/bubblesort">Bubble Sort</Link>
            </li>
            <li>
              <Link to="/insertionsort">Insertion Sort</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/sort">
            <Sort />
          </Route>
          <Route path="/bubblesort">
            <BubbleSort />
          </Route>
          <Route path="/insertionsort">
            <InsertionSort />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

render(<App />, document.getElementById("app"));
