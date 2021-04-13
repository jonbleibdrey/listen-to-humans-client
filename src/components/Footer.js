import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import "../css/Footer.css";

const Footer = () => {
  return (
    <ReactBootStrap.Navbar expand="lg" bg="dark" variant="dark">
      <img className="footer__img" src="../photos/logo1.PNG" alt="logo" />
      <ReactBootStrap.Navbar.Brand href="/">
        Read By Humans
        <AiOutlineFacebook className="footer__icons" />
        <AiOutlineInstagram className="footer__icons" />
        <FiTwitter className="footer__icons" />
      </ReactBootStrap.Navbar.Brand>
      <h6 className="footer__copy">
        Copyright © 2020-Jonathan Bleibdrey. All Rights Reserved.
      </h6>
    </ReactBootStrap.Navbar>
  );
};

export default Footer;
