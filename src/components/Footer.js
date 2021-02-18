import React from "react";
import * as ReactBootStrap from "react-bootstrap";

const Footer = () => {
  return (
    <div style={{position:"relative", bottom:0}}>
    <ReactBootStrap.Navbar
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <ReactBootStrap.Navbar.Brand href="/">
        Read By Humans
      </ReactBootStrap.Navbar.Brand>
      <h6 style={{marginLeft:"80%", color:"white"}}> made by: Jonathan Bleibdrey </h6>
    </ReactBootStrap.Navbar>
    </div>
  );
};

export default Footer;
