import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Testimonial from "./components/Testimonial";
import Subject from "./components/Subject";
import Home from "./components/Home";
import Author from "./components/Author";
import NoFlyZone from "./components/NoFlyZone";
import Footer from "./components/Footer";
import WhatHappens from "./components/WhatHappens";
import GoogleApi from "./components/GoogleApi";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/testimonial" component={Testimonial} />
          <Route path="/author" component={Author} />
          <Route path="/subject" component={Subject} />
          <Route path="/whatHappens" component={WhatHappens} />
          <Route path="/googleApi" component={GoogleApi} />
          <Route path="*" component={NoFlyZone} />
        </Switch>
        <WhatHappens name="whatHappens" />
        <Author name="author" />
        <GoogleApi name="googleApi" />
        <Subject name="subject" />
        <Testimonial name="testimonial" />
      </Router>
      <Footer />
    </>
  );
}

export default App;
