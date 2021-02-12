import React, { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";

const About = () => {
  const [people, setPeople] = useState([
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
    <Jumbotron
      style={{
        display: "flex",
        margin: "40px",
        marginRight: "100px",
        width: "100%",
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <Container>
        <h1> About page</h1>
        <p>
          {" "}
          This is a webpage for people to create librarys of read books. Where
          it differs from audible is that you the user could take a book and
          read it. You could create/read any book. then share it with other
          people. where i see this shining is college students. It can be
          challenging sometimes to find these books in audible form.{" "}
        </p>
        <div>
          {people.map((peeps) => (
            <Card key={peeps.id} style={{ display: "flex", margin: "20px", width: "90%", height:"40%"}}>
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
      </Container>
    </Jumbotron>
  );
};

export default About;

{
  /* <Card style={{ display: "flex", margin: "40px", marginRight: "100px", width: "90%", height:"45vmin"}}>
<Card.Body className="card text-center">
  <Card.Title> title of book: {title}</Card.Title>
  <hr />
  <Card.Subtitle className="mb-2 text-muted">
    Created by: {by}
  </Card.Subtitle>
  <hr />
  <Card.Text>
    Language: {language}
    <br />
    Audio file: {audio}
  </Card.Text>
  <hr /> */
}
