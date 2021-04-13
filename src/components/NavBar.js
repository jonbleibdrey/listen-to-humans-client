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
    <div style={{ padding: "1%" }}>
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="dark"
        style={{
          padding: "1%",
          justifyContent: "space-evenly",
          boxShadow: "-9px 10px 17px 7px #ccc",
          borderRadius: "25px",
          margin: "1%",
          marginBottom: "5%",
        }}
      >
        <ReactBootStrap.Navbar.Brand href="/">
          <div
            style={{
              marginRight: "50%",
              marginTop: "1%",
              fontFamily: "monospace",
              color: "#fac54b",
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
            style={{ cursor: "pointer" }}
          >
            <span title="Search any Book">
              <ImBooks style={{ color: "black", fontSize: "30px" }} />
            </span>
          </Link>
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Brand>
          <Link
            activeClass="active"
            to="whatHappens"
            spy={true}
            smooth={true}
            offset={250}
            duration={2000}
            style={{ cursor: "pointer" }}
          >
            <span title="How it works?">
              <IoCogOutline style={{ color: "black", fontSize: "39px" }} />
            </span>
          </Link>
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Brand>
          <Link
            activeClass="active"
            to="author"
            spy={true}
            smooth={true}
            offset={180}
            duration={2000}
            style={{ cursor: "pointer" }}
          >
            <span title="Search by Authors">
              <RiContactsBook2Line
                style={{ color: "black", fontSize: "30px" }}
              />
            </span>
          </Link>
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Brand>
          <Link
            activeClass="active"
            to="googleApi"
            spy={true}
            smooth={true}
            offset={-400}
            duration={2000}
            style={{ cursor: "pointer" }}
          >
            <span title="Google API">
              <SiGooglecloud style={{ color: "black", fontSize: "25px" }} />
            </span>
          </Link>
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Brand>
          <Link
            activeClass="active"
            to="subject"
            spy={true}
            smooth={true}
            offset={340}
            duration={2000}
            style={{ cursor: "pointer" }}
          >
            <span title="Search by Subject">
              <BiBookHeart style={{ color: "black", fontSize: "30px" }} />
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
            style={{ cursor: "pointer" }}
          >
            <span title="Testimonials">
              <RiKakaoTalkLine style={{ color: "black", fontSize: "30px" }} />
            </span>
          </Link>
        </ReactBootStrap.Navbar.Brand>
      </ReactBootStrap.Navbar>
    </div>
  );
};
export default NavBar;
