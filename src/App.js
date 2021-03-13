import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddAudible from "./components/AddAudible";
import EditAudible from "./components/EditAudible";
import EditReview from "./components/EditReview";
import About from "./components/About";
import Home from "./components/Home";
import Review from "./components/Review";
import NoFlyZone from "./components/NoFlyZone";
import AddReview from "./components/AddReview";
import Footer from "./components/Footer";



function App() {
  return (
    <>
    <NavBar />
    <Router>
    <Home name="home"/>
    <AddAudible name="addAudible" />
    <About name="about"/>
    <Review name="review"/>
    <AddReview name="addReview"/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/add" component={AddAudible} />
          <Route exact path="/addReview" component={AddReview} />
          <Route exact path="/edit/:id" component={EditAudible} />
          <Route exact path="/editReview/:id" component={EditReview} />
          <Route exact path="*" component={NoFlyZone} />
        </Switch>
    </Router>
       <Footer/>
    </>
  );
}

export default App;
