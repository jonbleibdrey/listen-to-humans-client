import React from "react";
import "./App.css"
import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import Review from "./components/Review";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddAudible from "./components/AddAudible";
import EditAudible from "./components/EditAudible";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NavBar />
      <div style={{maxWidth: "30rem", margin:"4rem auto"}}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/review" component={Review} />
        <Route path="/add" component={AddAudible} />
        <Route path="/edit/:id" component={EditAudible} />


      </Switch>
      </div>
    </Router>
  );
}

export default App;
