import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import AddAudible from "./AddAudible";
import EditAudible from "./EditAudible";
import About from "./About";
import Home from "./Home";
import Review from "./Review";
import NoFlyZone from "./NoFlyZone";


const RoutesTo = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/review" component={Review} />
      <Route path="/add" component={AddAudible} />
      <Route path="/edit/:id" component={EditAudible} />
      <Route path="/*" component={NoFlyZone} />
    </Switch>
  );
};

export default RoutesTo;
