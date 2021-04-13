import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import InformationTestimonial from "../components/InformationTestimonial";
import "../css/Testimonial/testimonial.css";

const Testimonial = () => {
  const [people] = useState([
    {
      id: 1,
      image: "../photos/face4.jpg",
      name: "tiffany",
      occupation: "student",
      bio:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut debitis quia eligendi eaque tenetur maxime assumenda laboriosam voluptate, expedita totam! Voluptas quaerat iusto accusantium quas neque odio pariatur cumque officiis.",
    },
    {
      id: 2,
      image: "../photos/face5.jpg",
      name: "franky",
      occupation: "lawyer",
      bio:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut debitis quia eligendi eaque tenetur maxime assumenda laboriosam voluptate, expedita totam! Voluptas quaerat iusto accusantium quas neque odio pariatur cumque officiis.",
    },
    {
      id: 3,
      image: "../photos/face6.jpg",
      name: "lang",
      occupation: "doctor",
      bio:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut debitis quia eligendi eaque tenetur maxime assumenda laboriosam voluptate, expedita totam! Voluptas quaerat iusto accusantium quas neque odio pariatur cumque officiis.",
    },
  ]);

  return (
    <>
      <div id="testimonial">
        <InformationTestimonial />
        <div className="testimonial__div">
          <Carousel>
            {people.map((peo) => (
              <Carousel.Item key={peo.id} interval={6000}>
                <img
                  className="d-block w-100"
                  src={peo.image}
                  alt="First slide"
                  id="testimonial__img"
                />
                <Carousel.Caption
                  style={{
                    color: "black",
                    fontFamily: "monospace",
                    objectFit: "contain",
                    fontSize: "10px",
                  }}
                >
                  <h3>Name: {peo.name}</h3>
                  <p>
                    occupation: {peo.occupation}
                    <br />
                    <br />
                    Testimonial:
                    {peo.bio}
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
