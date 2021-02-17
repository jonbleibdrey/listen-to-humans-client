import React from "react";
import * as ReactBootStrap from "react-bootstrap";

const NavBar = () => {
  return (
    <ReactBootStrap.Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{padding:"50px"}}
      
    >
      <ReactBootStrap.Navbar.Brand href="/" >
      <img
        alt=""
        src="/logo192.png"
        width="30"
        height="30"
        align="left"
        className="col-sm-3"
      />
        <h4>
          Read By Humans.
          </h4>
          
        
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav" >
        <ReactBootStrap.Nav className="mr-auto">
          <ReactBootStrap.NavDropdown title="More" id="collasible-nav-dropdown">
            <ReactBootStrap.NavDropdown.Item href="/">
              Home
            </ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="/review">
              Review's
            </ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="/about">
              About
            </ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="/add">
              Add Audible
            </ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="/addReview">
              Add Review
            </ReactBootStrap.NavDropdown.Item>
          </ReactBootStrap.NavDropdown>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  );
};
export default NavBar;
