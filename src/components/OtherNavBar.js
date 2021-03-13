import React from "react";
import { Link } from "react-scroll";

const OtherNavBar = () => {
  return (
    <div style={{padding:"5%",color:"white", backgroundColor:"black", margin:"30px"}}>
        <ul>
      <li>
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
      </li>
      <li>
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
      </li>
      <li>
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
      </li>
      <li>
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
      </li>
      <li>
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
      </li>
      </ul>
    </div>
  );
};

export default OtherNavBar;
