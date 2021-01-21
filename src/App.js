import React from "react";
import "./App.css"
import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import Review from "./components/Review";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/review" component={Review} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
