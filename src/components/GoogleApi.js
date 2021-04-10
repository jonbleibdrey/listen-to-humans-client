import React from "react";
import { Col, Container, Row, Card, CardDeck } from "react-bootstrap";
import { FaBookDead } from "react-icons/fa";
import { FaBookMedical } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

const GoogleApi = () => {
  return (
    <>
    <div style={{
            padding: "2%",
            margin:"5%",
            marginLeft:"20%",
            marginBottom:"5%",
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
          marginLeft: "30%",
          fontFamily: "monospace",
          color: "#e3c378",
        }}
      >
        How the API actually works
      </h3>
      <h1
        style={{
          marginLeft: "23%",
          padding: "10px",
          fontFamily: "monospace",
        }}
      >
        IT GOES TO SPACE AND BACK
      </h1>

      <hr
        style={{
          display: "block",
          height: "1px",
          width: "35%",
          border: "0",
          borderTop: "5px solid #f29161",
          padding: "3%",
        }}
      />
    </div>

      <Container>
        <Row>
          <Col xs={6}>
            <CardDeck>
              <Card
                style={{
                  padding: "5%",
                  marginRight: "20%",
                  width: "60%",
                  height: "auto",
                  backgroundColor: "white",
                  fontFamily: "monospace",
                  boxShadow: "-13px 20px 12px 13px #ccc",
                  borderRadius: "20px",
                }}
              >
                <Card.Body>
                  <FaBook />
                  <Card.Title>
                    Google APIs are application programming interfaces.
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Enim qui eum rerum aliquam labore commodi corrupti, fuga
                    quaerat animi dignissimos accusamus veritatis iure, deleniti
                    non repudiandae obcaecati sapiente fugiat quibusdam!
                  </Card.Text>
                  <FaBookMedical />
                  <Card.Title>
                    They allow communication with Google Services
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Enim qui eum rerum aliquam labore commodi corrupti, fuga
                    quaerat animi dignissimos accusamus veritatis iure, deleniti
                    non repudiandae obcaecati sapiente fugiat quibusdam!
                  </Card.Text>
                  <FaBookDead />
                  <Card.Title>
                    Third-party apps can use these APIs to take advantage of
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Enim qui eum rerum aliquam labore commodi corrupti, fuga
                    quaerat animi dignissimos accusamus veritatis iure, deleniti
                    non repudiandae obcaecati sapiente fugiat quibusdam!
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Col>
          <Col xs={6}>
            <div id="googleApi">
              <img
                className="animate__animated animate__slideInRight"
                src="../googlepng.PNG"
                alt="google"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <hr
        style={{
          width: "98%",
          border: "20px solid white",
          marginTop: "5%",
          boxShadow: "-3px 10px 20px  #ccc",
        }}
      />
    </>
  );
};

export default GoogleApi;
