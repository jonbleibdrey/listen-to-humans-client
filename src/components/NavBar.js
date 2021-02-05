import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
// import{Link} from "react-router-dom"

const NavBar = () => {
    return (
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <ReactBootStrap.Navbar.Brand href="/" >Read By Humans</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav" >
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.NavDropdown title="More" id="collasible-nav-dropdown">
              <ReactBootStrap.NavDropdown.Item href="/">Home</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/review">Review's</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/about">About</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/add">Add Audible</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/addReview">Add Review</ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    )
}
export default NavBar