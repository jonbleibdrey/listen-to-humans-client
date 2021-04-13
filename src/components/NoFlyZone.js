import React from "react";
import { Link } from "react-router-dom";
import "../css/NoFlyZone.css";

const NoFlyZone = () => {
  return (
    <div className="no__div">
      <img
        className="animate__animated animate__fadeIn"
        src="../photos/logo1.PNG"
        alt="logo"
        id="no__img"
      />
      <h1 className="no__header">NO FLY ZONE!</h1>
      <div className="no__linkDiv">
        <Link className="no__link" to="/">
          ...would you like to go back to the home page?
        </Link>
      </div>
    </div>
  );
};

export default NoFlyZone;
