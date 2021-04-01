import React, {useRef} from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Subject from "./components/Subject";
import Home from "./components/Home";
import Review from "./components/Review";
import NoFlyZone from "./components/NoFlyZone";
import Footer from "./components/Footer";
import useOutsideClick from "./components/UseOutsideClick";
import { animateScroll as scroll } from "react-scroll";
import WhatHappens from "./components/WhatHappens";


function App() {
  const ref = useRef()


 useOutsideClick(ref, () => {
  scroll.scrollToTop();
});

  return (
    <>
    <div style={{ margin:"60px", borderWidth:"10px", borderStyle:"inset", borderColor: "#f09759" , marginBottom:"5%" , backgroundImage: "url(../books-2.jpg)", backgroundSize:"100% 30%"}} ref={ref}>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/review" component={Review} />
          <Route path="/subject" component={Subject} />
          <Route path="/whatHappens" component={WhatHappens} />
          <Route path="*" component={NoFlyZone} />
        </Switch>
        <WhatHappens name="whatHappens" />
        <Review name="review" />
        <Subject name="subject" />
        <About name="about" />
      </Router>
      <Footer />
      </div>
    </>
  );
}

export default App;
