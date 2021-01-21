import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap"

const NavBar = () => {
    return (
      <Router>
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <ReactBootStrap.Navbar.Brand href="#home">Read By Humans</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="#features">All Audibles</ReactBootStrap.Nav.Link>
            <ReactBootStrap.NavDropdown title="More" id="collasible-nav-dropdown">
              <ReactBootStrap.NavDropdown.Item href="#action/3.1">About</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.2">Review</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.3">Listen</ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </Router>
    )
}
export default NavBar