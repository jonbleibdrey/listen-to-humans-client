import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const About = () => {
  const [people] = useState([
    {
      id: 1,
      image: "../face4.jpg",
      name: "tiffany",
      occupation: "student",
      bio:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut debitis quia eligendi eaque tenetur maxime assumenda laboriosam voluptate, expedita totam! Voluptas quaerat iusto accusantium quas neque odio pariatur cumque officiis.",
    },
    {
      id: 2,
      image: "../face5.jpg",
      name: "franky",
      occupation: "lawyer",
      bio:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut debitis quia eligendi eaque tenetur maxime assumenda laboriosam voluptate, expedita totam! Voluptas quaerat iusto accusantium quas neque odio pariatur cumque officiis.",
    },
    {
      id: 3,
      image: "../face6.jpg",
      name: "lang",
      occupation: "doctor",
      bio:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut debitis quia eligendi eaque tenetur maxime assumenda laboriosam voluptate, expedita totam! Voluptas quaerat iusto accusantium quas neque odio pariatur cumque officiis.",
    },
  ]);

  return (
    <>
      <div id="about">
        <h3
          style={{
            marginLeft: "45%",
            fontFamily: "initial",
            color: "#e6a57e",
            marginTop: "5%",
          }}
        >
          Testimonials
        </h3>
        <h1
          style={{
            marginLeft: "35%",
            padding: "10px",
            fontFamily: "initial",
          }}
        >
          WHAT PEOPLE HAVE TO SAY
        </h1>

        <hr
          style={{
            display: "block",
            height: "1px",
            width: "40%",
            border: "0",
            borderTop: "5px solid #e3c378",
            margin: "",
          }}
        />

        <div
          style={{
            padding: "3%",
            marginBottom: "5%",
            marginLeft: "18%",
            marginTop: "5%",
            width: "60%",
            height: "auto",
            backgroundColor: "white",
            border: "1px solid gray",
            fontFamily: "monospace",
            boxShadow: "10px 20px",
            borderRadius: "20px",
          }}
        >
          <Carousel>
            {people.map((peo) => (
              <Carousel.Item key={peo.id} interval={6000}>
                <img
                  className="d-block w-100"
                  src={peo.image}
                  alt="First slide"
                  style={{
                    width: "200px",
                    height: "500px",
                    objectFit: "contain",
                  }}
                />
                <Carousel.Caption
                  style={{
                    width: "20%",
                    color: "black",
                    fontFamily: "monospace",
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

export default About;
