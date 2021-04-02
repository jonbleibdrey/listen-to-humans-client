import React from "react";
import { Link } from "react-router-dom";


const NoFlyZone = () => {
  return (
    <div
      style={{
        backgroundImage: "url(../hallway.jpg)",
        backgroundSize: "contain",
        padding: "20%",
        color: "red",
        fontSize: "100%",
      }}
    >
      <img
        className="animate__animated animate__fadeIn"
        src="../logo1.PNG"
        alt="logo"
        style={{
          width: "30%",
          height: "5%",
          marginLeft: "37%",
        }}
      />
      <h1 style={{
          height: "5%",
          float: "center",
          marginLeft: "10%",
          fontSize:"100px",
          color:"black",
          fontFamily: "monospace",
            boxShadow: "10px 20px",
            borderRadius: "20px",
            backgroundColor:"white",
            textAlign:"center"
        }}>NO FLY ZONE!</h1>
      <hr />
      <Link style={{
          width: "30%",
          height: "5%",
          float: "center",
          marginLeft: "37%",
          color:"black"
        }}to="/">...would you like to go back to the home page?</Link>
    </div>
  );
};

export default NoFlyZone;
