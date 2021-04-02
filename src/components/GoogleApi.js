import React from 'react'
import { Col, Container, Row, Card, CardDeck } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

const GoogleApi = () => {
    return (
        <>    
          <h3
            style={{
              marginLeft: "43%",
              fontFamily: "initial",
              color: "#e6a57e",
            }}
          >
            How the API actually works
          </h3>
          <h1
            style={{
              marginLeft: "35%",
              padding: "10px",
              fontFamily: "initial",
            }}
          >
            IT GOES TO SPACE AND BACK
          </h1>

          <hr
            style={{
              display: "block",
              height: "1px",
              width:"30%",
              border: "0",
              borderTop: "5px solid #e3c378" /* YOUR COLOR HERE */,
              margin: "",
              padding: "5%",
            }}
          />

        <Container>
            <Row>
        <Col xs={6}>
            <CardDeck>
          <Card
            style={{
              padding: "2%",
              marginRight:"20%",
              width: "60%",
              height: "auto",
              backgroundColor: "white",
              border: "1px solid gray",
              fontFamily: "monospace",
              boxShadow: "10px 20px",
              borderRadius: "20px",
            }}
          >
            <Card.Img variant="top" src="../books-3.jpg" />
            <Card.Body>
              <Card.Title>Google APIs are application programming interfaces.</Card.Title>
              <Card.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                qui eum rerum aliquam labore commodi corrupti, fuga quaerat
                animi dignissimos accusamus veritatis iure, deleniti non
                repudiandae obcaecati sapiente fugiat quibusdam!
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        </Col>
        <Col xs={6}>
        <div id="googleApi">
            <img className="animate__animated animate__slideInRight" src="../google.JPG" alt="google" roundedCircle/>
        </div>
        </Col>
            </Row>
        </Container>
        </>
    )
}

export default GoogleApi
