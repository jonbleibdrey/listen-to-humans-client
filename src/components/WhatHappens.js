import React from "react";
import { Button, Card, CardDeck } from "react-bootstrap";

const WhatHappens = () => {
  return (
    <>
      <div id="whatHappens" style={{ padding: "10%", backgroundColor: "white", marginTop: "5%", marginBottom:"10%" }}>
        <div
          style={{
            padding: "30px",
            margin:"1%"
          }}
        >
          <h3
            style={{
              marginLeft: "40%",
              fontFamily: "initial",
              color: "#e6a57e",
            }}
          >
            What Happens Here
          </h3>
          <h1
            style={{
              marginLeft: "30%",
              padding: "10px",
              fontFamily: "initial",
            }}
          >
            YOU SEARCH FOR BOOKS.
          </h1>

          <hr
            style={{
              display: "block",
              height: "1px",
              width:"50%",
              border: "0",
              borderTop: "5px solid #e3c378" /* YOUR COLOR HERE */,
              margin: "",
              padding: "0",
            }}
          />
        </div>

        <CardDeck>
          <Card
            style={{
              padding: "2%",
              width: "60%",
              height: "auto",
              backgroundColor: "white",
              border: "1px solid gray",
              fontFamily: "monospace",
              boxShadow: "10px 20px",
              borderRadius: "20px",
            }}
          >
            <Card.Img variant="top" src="../smallbook4.jpg" />
            <Card.Body>
              <Card.Title>01. Type in search bar</Card.Title>
              <Card.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                qui eum rerum aliquam labore commodi corrupti, fuga quaerat
                animi dignissimos accusamus veritatis iure, deleniti non
                repudiandae obcaecati sapiente fugiat quibusdam!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{
              padding: "2%",
              width: "60%",
              height: "auto",
              backgroundColor: "white",
              border: "1px solid gray",
              fontFamily: "monospace",
              boxShadow: "10px 20px",
              borderRadius: "20px",
            }}
          >
            <Card.Img variant="top" src="../smallbook2.jpg" />
            <Card.Body>
              <Card.Title>02. Find book and click</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
                fugit, ipsum ab corrupti vel pariatur quam provident eveniet
                rerum esse nemo quis laboriosam corporis. Doloremque quae optio
                beatae laborum ab.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{
              padding: "2%",
              width: "60%",
              height: "auto",
              backgroundColor: "white",
              border: "1px solid gray",
              fontFamily: "monospace",
              boxShadow: "10px 20px",
              borderRadius: "20px",
            }}
          >
            <Card.Img variant="top" src="../smallbook3.jpg" />
            <Card.Body>
              <Card.Title>03. Read till your hearts content</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, suscipit impedit. Quaerat, impedit? Quam impedit
                pariatur earum itaque mollitia tenetur beatae perferendis ad
                error suscipit, voluptates, soluta vel culpa qui?
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    </>
  );
};

export default WhatHappens;
