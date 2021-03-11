import React from 'react'
import {Link, animatedScroll as scroll} from "react-scroll"

const OtherNavBar = () => {
    return (
        <div className="navbar">
              <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >Home</Link>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >about</Link>
      <Link
        activeClass="active"
        to=""
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >review</Link>
      <Link
        activeClass="active"
        to=""
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >addaudible</Link>
        </div>
    )
}

export default OtherNavBar
