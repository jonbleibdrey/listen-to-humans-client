import React from 'react'
import * as ReactBootStrap from "react-bootstrap";

const Footer = () => {
    return (
        
        <ReactBootStrap.Navbar
        expand="lg"
        bg="dark"
        variant="dark"
        position= "sticky"
      >
        <ReactBootStrap.Navbar.Brand href="/">
          Read By Humans
        </ReactBootStrap.Navbar.Brand>
        <h1> made by: Jonathan  Bleibdrey </h1>
      </ReactBootStrap.Navbar>
       
    )
}

export default Footer
