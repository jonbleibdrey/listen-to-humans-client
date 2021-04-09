import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <ReactBootStrap.Navbar expand="lg" bg="dark" variant="dark">
      <img
        src="../logo1.PNG"
        alt="logo"
        style={{
          width: "5%",
          height: "auto",
          float: "left",
          margin: "20px",
          marginRight: "50px",
        }}
      />
      <ReactBootStrap.Navbar.Brand href="/">
        Read By Humans
        <AiOutlineFacebook
          style={{ margin: "3%", fontSize:'100%' }}
          
        />
        <AiOutlineInstagram
          style={{ margin: "3%", fontSize:'100%' }}
          
        />
        <FiTwitter
          style={{ margin: "3%", fontSize:'100%' }}
          
        />
      </ReactBootStrap.Navbar.Brand>
      <h6 style={{ marginLeft: "50%", color:'#e3e3e3' }}>
        Copyright © 2020-Jonathan Bleibdrey. All Rights Reserved.
      </h6>
    </ReactBootStrap.Navbar>
  );
};

export default Footer;
