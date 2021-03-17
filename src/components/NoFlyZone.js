import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const NoFlyZone = () => {
  return (
    <div
      style={{
        backgroundColor: "#ebd078",
        padding: "20%",
        color: "red",
        fontSize: "100%",
      }}
    >
      <h1>NO FLY ZONE!</h1>
      <hr />
      <Link to="/">...would you like to go back to the home page?</Link>
    </div>
  );
};

export default NoFlyZone;
