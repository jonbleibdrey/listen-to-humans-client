import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const About = () => {
  return (
    <Jumbotron>
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
      </Container>
    </Jumbotron>
  );
};

export default About;
