import React, {useRef} from "react";
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
import useOutsideClick from "./components/UseOutsideClick";
import { animateScroll as scroll } from "react-scroll";


function App() {
  const ref = useRef()


 useOutsideClick(ref, () => {
  scroll.scrollToTop();
});

  return (
    <>
    <div style={{ margin:"60px", borderWidth:"10px", borderStyle:"inset", borderColor: "#f09759" , marginBottom:"5%"}} ref={ref}>
      <NavBar />
      <Router>
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
        <AddAudible name="addAudible" />
        <About name="about" />
        <Review name="review" />
        <AddReview name="addReview" />
      </Router>
      <Footer />
      </div>
    </>
  );
}

export default App;
