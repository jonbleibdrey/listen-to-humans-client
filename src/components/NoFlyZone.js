import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const NoFlyZone = () => {
  return (
    <div className="noFlyZone">
      <h1>NO FLY ZONE!</h1>
      <hr />
      <Link to="/">...would you like to go back to the home page?</Link>
    </div>
  );
};

export default NoFlyZone;
