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
        <div
          style={{
            margin:"0",
            marginRight: "50%",
            marginTop: "1%",
            fontFamily: "monospace",
          }}
        >
        {/* <img alt="logo" src="/logo1.PNG" align="left" className="col-sm-3" /> */}
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
          Books
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
          to="author"
          spy={true}
          smooth={true}
          offset={-20}
          duration={4000}
          style={{ fontSize: "25px", cursor: "pointer" }}
        >
          Author
        </Link>
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Brand>
        <Link
          activeClass="active"
          to="subject"
          spy={true}
          smooth={true}
          offset={-25}
          duration={2000}
          style={{ fontSize: "25px", cursor: "pointer" }}
        >
          Subject
        </Link>
      </ReactBootStrap.Navbar.Brand>
    </ReactBootStrap.Navbar>
  );
};
export default NavBar;
