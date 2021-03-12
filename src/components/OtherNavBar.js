import React from 'react'
import {Link} from "react-scroll"

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
          to="addAudible"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >addaudible</Link>
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
        to="review"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >review</Link>
      <Link
        activeClass="active"
        to="addReview"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >add review</Link>
        </div>
    )
}

export default OtherNavBar
