import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
// import{Link} from "react-router-dom"

const NavBar = () => {
    return (
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <ReactBootStrap.Navbar.Brand >Read By Humans</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="/">All Audibles</ReactBootStrap.Nav.Link>
            <ReactBootStrap.NavDropdown title="More" id="collasible-nav-dropdown">
              <ReactBootStrap.NavDropdown.Item href="/about">About</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/review">Review</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/">Home</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/add">Add Audible</ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    )
}
export default NavBar