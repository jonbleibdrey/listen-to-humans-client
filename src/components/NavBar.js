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
      style={{ padding: "3%", justifyContent:"space-evenly" }}
    >
      <ReactBootStrap.Navbar.Brand href="/">
        <img
          alt=""
          src="/logo1.PNG"
          width="30"
          height="auto"
          align="left"
          className="col-sm-3"
        />
        <div style={{marginLeft:"25%", marginTop:"10%"}}>
        <h4>Read By Humans.</h4>

        </div>
      </ReactBootStrap.Navbar.Brand>
      
            <ReactBootStrap.Navbar.Brand href="/">
            <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        audible
      </Link>
            </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Brand href="/add">
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
            </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Brand href="/about">
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
            </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Brand href="/review">
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
            </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Brand href="/addReview">
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
            </ReactBootStrap.Navbar.Brand>
    </ReactBootStrap.Navbar>
  );
};
export default NavBar;
