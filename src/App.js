import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Import pages
import Home from "./pages/home";
import About from "./pages/about";

const App = () => {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
