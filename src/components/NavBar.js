import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <ReactBootStrap.Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ padding: "50px" }}
    >
      <ReactBootStrap.Navbar.Brand href="/">
        <img
          alt=""
          src="/logo192.png"
          width="30"
          height="30"
          align="left"
          className="col-sm-3"
        />
        <h4>Read By Humans.</h4>
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
          <ReactBootStrap.NavDropdown title="More" id="collasible-nav-dropdown">
            <ReactBootStrap.NavDropdown.Item href="/">
            <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Home
      </Link>
            </ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="/review">
            <Link
        activeClass="active"
        to="review"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        review
      </Link>
            </ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="/about">
            <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        about
      </Link>
            </ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="/add">
            <Link
        activeClass="active"
        to="addAudible"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        addaudible
      </Link>
            </ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="/addReview">
            <Link
        activeClass="active"
        to="addReview"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        add review
      </Link>
            </ReactBootStrap.NavDropdown.Item>
          </ReactBootStrap.NavDropdown>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  );
};
export default NavBar;
