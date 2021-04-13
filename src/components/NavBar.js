import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-scroll";
import { ImBooks } from "react-icons/im";
import { IoCogOutline } from "react-icons/io5";
import { RiContactsBook2Line } from "react-icons/ri";
import { SiGooglecloud } from "react-icons/si";
import { BiBookHeart } from "react-icons/bi";
import { RiKakaoTalkLine } from "react-icons/ri";
import "../css/navBar.css";

const NavBar = () => {
  return (
    <div className="navBar__div">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="dark"
        className="navBar__container"
      >
        <ReactBootStrap.Navbar.Brand href="/">
          <div className="navBar__header">
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
            className="navBar__link"
          >
            <span title="Search any Book">
              <ImBooks className="navBar__logo" />
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
            className="navBar__link"
          >
            <span title="How it works?">
              <IoCogOutline className="navBar__logo2" />
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
            className="navBar__link"
          >
            <span title="Search by Authors">
              <RiContactsBook2Line className="navBar__logo" />
            </span>
          </Link>
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Brand>
          <Link
            activeClass="active"
            to="googleApi"
            spy={true}
            smooth={true}
            offset={0}
            duration={2000}
            className="navBar__link"
          >
            <span title="Google API">
              <SiGooglecloud className="navBar__logo" />
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
            className="navBar__link"
          >
            <span title="Search by Subject">
              <BiBookHeart className="navBar__logo" />
            </span>
          </Link>
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Brand>
          <Link
            activeClass="active"
            to="testimonial"
            spy={true}
            smooth={true}
            offset={-10}
            duration={3000}
            className="navBar__link"
          >
            <span title="Testimonials">
              <RiKakaoTalkLine className="navBar__logo" />
            </span>
          </Link>
        </ReactBootStrap.Navbar.Brand>
      </ReactBootStrap.Navbar>
    </div>
  );
};
export default NavBar;
