import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import AddAudible from "./AddAudible";
import EditAudible from "./EditAudible";
import ShowAudible from "./ShowAudible";
import About from "./About";
import Home from "./Home";
import Review from "./Review";

const RoutesTo = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/review" component={Review} />
      <Route path="/add" component={AddAudible} />
      <Route path="/edit/:id" component={EditAudible} />
      <Route path="/show/:id" component={ShowAudible} />
    </Switch>
  );
};

export default RoutesTo;
