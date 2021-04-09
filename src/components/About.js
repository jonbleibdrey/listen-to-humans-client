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
            fontFamily: "monospace",
            color: "#e3c378",
            marginTop: "5%",
          }}
        >
          Testimonials
        </h3>
        <h1
          style={{
            marginLeft: "37%",
            padding: "10px",
            fontFamily: "monospace",
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
            borderTop: "5px solid #f29161",
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
            fontFamily: "monospace",
            boxShadow: "-21px 27px 15px 25px #ccc",
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
                    width: "30vw",
                    height: "30vw",
                    objectFit: "contain",
                  }}
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

export default About;
