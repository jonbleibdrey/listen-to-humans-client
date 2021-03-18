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
      style={{ padding: "3%", justifyContent: "space-evenly" }}
    >
      <ReactBootStrap.Navbar.Brand href="/">
        <img alt="logo" src="/logo1.PNG" align="left" className="col-sm-3" style={{width:"1vw"}} />
        <div
          style={{
            marginLeft: "25%",
            marginTop: "10%",
            fontFamily: "monospace",
          }}
        >
          <h1>Read By Humans.</h1>
        </div>
      </ReactBootStrap.Navbar.Brand>

      <ReactBootStrap.Navbar.Brand>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={110}
          duration={1000}
          style={{ fontSize: "25px", cursor: "pointer" }}
        >
          Audible
        </Link>
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Brand>
        <Link
          activeClass="active"
          to="addAudible"
          spy={true}
          smooth={true}
          offset={-25}
          duration={2000}
          style={{ fontSize: "25px", cursor: "pointer" }}
        >
          Add Audible
        </Link>
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Brand>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={69}
          duration={3000}
          style={{ fontSize: "25px", cursor: "pointer" }}
        >
          About
        </Link>
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Brand>
        <Link
          activeClass="active"
          to="review"
          spy={true}
          smooth={true}
          offset={-20}
          duration={4000}
          style={{ fontSize: "25px", cursor: "pointer" }}
        >
          Review
        </Link>
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Brand>
        <Link
          activeClass="active"
          to="addReview"
          spy={true}
          smooth={true}
          offset={0}
          duration={3000}
          style={{ fontSize: "25px", cursor: "pointer" }}
        >
          Add Review
        </Link>
      </ReactBootStrap.Navbar.Brand>
    </ReactBootStrap.Navbar>
  );
};
export default NavBar;
