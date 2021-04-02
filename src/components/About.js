import React, { useState } from "react";
import { Card } from "react-bootstrap";

const About = () => {
  const [people] = useState([
    {
      id: 1,
      image: "../face2.jpg",
      name: "tiffany",
      occupation: "student",
      bio:
        " i really like this website it helps me share my college books with others",
    },
    {
      id: 2,
      image: "../face1.jpg",
      name: "franky",
      occupation: "lawyer",
      bio:
        " I use this sight to help my peers learn all the law books in our library.",
    },
    {
      id: 3,
      image: "../face3.jpg",
      name: "lang",
      occupation: "doctor",
      bio:
        " i come back and forth to this website to listen to all the medical books others have recorded before me.",
    },
  ]);

  return (
    <>
      <div id="about" style={{ padding: "3%", backgroundImage: "url(../books-2.jpg)", backgroundSize:"100% 100%"}}>
        <div
          style={{
            padding: "2%",
            marginLeft: "20%",
            width: "60%",
            height: "auto",
            backgroundColor: "white",
            fontFamily: "monospace",
            boxShadow: "10px 20px",
            borderRadius: "20px",
          }}
        >
          <div>
            <h1>About</h1>
            <hr />
            <h5>
              I designed this website to help people to record audible to share
              with others. We differ from audible, in that you the ordinary user
              could take a book, read it, record it and share it. Where i see
              this shining mostly is college students, It can be challenging
              sometimes to find certain books in audible form. Dont take it from
              me, Here are some testimonials from all walks of life.
            </h5>
          </div>
        </div>
        <div style={{ margin: "10%", marginTop: "1%" }}>
          {people.map((peo) => (
            <Card
              key={peo.id}
              style={{
                margin: "50px",
                marginLeft: "19%",
                marginBottom: "25px",
                width: "60%",
                height: "auto",
              }}
            >
              <Card.Body className="card">
                <Card.Img
                  src={peo.image}
                  style={{
                    variant: "top",
                    boxShadow: "5px 10px ",
                    borderRadius: "20px",
                  }}
                />
                <hr />
                <Card.Title>
                  <h1>Name: {peo.name}</h1>
                </Card.Title>
                <Card.Subtitle>
                  <h4>occupation: {peo.occupation}</h4>
                </Card.Subtitle>
                <Card.Text>
                  <h6>Testimonial:</h6>
                  <p>{peo.bio}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
