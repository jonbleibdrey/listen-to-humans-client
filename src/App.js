import React from "react";
import "./App.css"
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutesTo from './components/RoutesTo'


function App() {
  return (
    <Router>
      <NavBar />
      <div style={{maxWidth: "30rem", margin:"4rem auto"}}>
      <RoutesTo/>
      </div>
    </Router>
  );
}

export default App;
