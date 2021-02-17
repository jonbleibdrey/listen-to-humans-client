import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddAudible from "./components/AddAudible";
import EditAudible from "./components/EditAudible";
import EditReview from "./components/EditReview";
import About from "./components/About";
import Home from "./components/Home";
import Review from "./components/Review";
import NoFlyZone from "./components/NoFlyZone";
import AddReview from "./components/AddReview";
import Information from "./components/Information";


function App() {
  return (
    <Router>
      <NavBar />
      <Information/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/review" component={Review} />
          <Route path="/add" component={AddAudible} />
          <Route path="/addReview" component={AddReview} />
          <Route path="/edit/:id" component={EditAudible} />
          <Route path="/editReview/:id" component={EditReview} />
          <Route path="*" component={NoFlyZone} />
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
