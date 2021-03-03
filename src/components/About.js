import React, { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Card } from "react-bootstrap";

const About = () => {
  const [people] = useState([
    {
      id: 1,
      name: "tiffany",
      occupation: "student",
      bio:
        " i really like this website it helps me share my college books with others",
    },
    {
      id: 2,
      name: "franky",
      occupation: "lawyer",
      bio:
        " I use this sight to help my peers learn all the law books in our library.",
    },
    {
      id: 3,
      name: "lang",
      occupation: "doctor",
      bio:
        " i come back and forth to this website to listen to all the medical books others have recorded before me.",
    },
  ]);

  return (
    <>
    <Jumbotron
      style={{
        margin: "40px",
        marginLeft: "20%",
        width: "60%",
        height: "100%",
        backgroundColor: "white",
        border: "1px solid gray",
        fontFamily:"monospace",
        boxShadow:"10px 20px",
        borderRadius:"20px"
      }}
    >
        <h1 className="animate__animated animate__bounce"> About page</h1>
        <p>
          {" "}
          This is a page to hear about some testimonials. We
          differ from audible in that you the ordinary user could take a book,
          read it, and record it. Then share it with other
          people. where i see this shining is college students, It can be
          challenging sometimes to find certain books in audible form. Dont take it from me read below.{" "}
        </p>
        <img src="../logo192.png" alt="logo" style={{marginLeft:"40%",marginTop:"5%"}}></img>
          </Jumbotron>
       <div style={{margin:"10%", marginTop:"1%"}}>
          {people.map((peeps) => (
            <Card
              key={peeps.id}
              style={{
                display: "flex",
                margin: "50px",
                marginLeft:"19%",
                marginBottom:"25px",
                width: "60%",
                height: "25%"
                
              }}
              
            >
              <Card.Body className="card text-center">
                <Card.Title> Name: {peeps.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  occupation: {peeps.occupation}
                </Card.Subtitle>
                <Card.Text>Testimonial: {peeps.bio}</Card.Text>
              </Card.Body>
            </Card>
          ))}
      </div>
      </>
  );
};

export default About;

