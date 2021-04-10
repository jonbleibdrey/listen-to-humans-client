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
      <div id="about" >
        <div style={{
            padding: "2%",
            margin:"5%",
            marginLeft:"18%",
            width: "60%",
            height: "auto",
            backgroundColor: "white",
            border: "10px white",
            fontFamily: "monospace",
            boxShadow: "-11px 13px 15px 10px #ccc",
            borderRadius: "25px",
          }}>

        <h3
          style={{
            marginLeft: "39%",
            fontFamily: "monospace",
            color: "#e3c378",
            marginTop: "5%",
          }}
        >
          Testimonials
        </h3>
        <h1
          style={{
            marginLeft: "25%",
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
            width: "50%",
            border: "0",
            borderTop: "5px solid #f29161",
          }}
        />
        </div>

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
            boxShadow: "-13px 20px 15px 19px #ccc",
            borderRadius: "50px",
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
