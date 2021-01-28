import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

const RoutesTo = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/review" component={Review} />
      <Route path="/add" component={AddAudible} />
      <Route path="/edit/:id" component={EditAudible} />
    </Switch>
  );
};

export default RoutesTo;
