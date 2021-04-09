import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-scroll";
import { ImBooks } from "react-icons/im";
import { IoCogOutline } from "react-icons/io5";
import { RiContactsBook2Line } from "react-icons/ri";
import { SiGooglecloud } from "react-icons/si";
import { BiBookHeart } from "react-icons/bi";
import { RiKakaoTalkLine } from "react-icons/ri";

const NavBar = () => {
  return (
    <ReactBootStrap.Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ padding: "1%", justifyContent: "space-around" }}
    >
      <ReactBootStrap.Navbar.Brand href="/">
        <div
          style={{
            marginRight: "50%",
            marginTop: "1%",
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
          offset={10}
          duration={1000}
          style={{ fontSize: "25px", cursor: "pointer", fontFamily: "initial" }}
        >
          <span title="Search any Book">
            <ImBooks />
          </span>
        </Link>
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Brand>
        <Link
          activeClass="active"
          to="whatHappens"
          spy={true}
          smooth={true}
          offset={170}
          duration={2000}
          style={{ fontSize: "25px", cursor: "pointer", fontFamily: "initial" }}
        >
          <span title="How it works?">
            <IoCogOutline />
          </span>
        </Link>
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Brand>
        <Link
          activeClass="active"
          to="author"
          spy={true}
          smooth={true}
          offset={185}
          duration={2000}
          style={{ fontSize: "25px", cursor: "pointer", fontFamily: "initial" }}
        >
          <span title="Search by Authors">
            <RiContactsBook2Line />
          </span>
        </Link>
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Brand>
        <Link
          activeClass="active"
          to="googleApi"
          spy={true}
          smooth={true}
          offset={-275}
          duration={2000}
          style={{ fontSize: "25px", cursor: "pointer", fontFamily: "initial" }}
        >
          <span title="Google API">
            <SiGooglecloud />
          </span>
        </Link>
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Brand>
        <Link
          activeClass="active"
          to="subject"
          spy={true}
          smooth={true}
          offset={190}
          duration={2000}
          style={{ fontSize: "25px", cursor: "pointer", fontFamily: "initial" }}
        >
          <span title="Search by Subject">
            <BiBookHeart />
          </span>
        </Link>
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Brand>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-10}
          duration={3000}
          style={{ fontSize: "25px", cursor: "pointer", fontFamily: "initial" }}
        >
          <span title="Testimonials">
            <RiKakaoTalkLine />
          </span>
        </Link>
      </ReactBootStrap.Navbar.Brand>
    </ReactBootStrap.Navbar>
  );
};
export default NavBar;
