import React from "react";
import { Card, CardDeck } from "react-bootstrap";

const WhatHappens = () => {
  return (
    <>
     
      <div
        id="whatHappens"
        style={{
          padding: "10%",
          backgroundColor: "white",
          marginTop: "1%",
          marginBottom: "5%",
        }}
      >
        <div
          style={{
            padding: "2%",
            margin: "5%",
            marginLeft: "20%",
            width: "60%",
            height: "auto",
            backgroundColor: "white",
            border: "10px white",
            fontFamily: "monospace",
            boxShadow: "-12px 13px 15px 10px #ccc",
            borderRadius: "20px",
          }}
        >
          <h3
            style={{
              marginLeft: "35%",
              fontFamily: "monospace",
              color: "#e3c378",
            }}
          >
            What Happens Here
          </h3>
          <h1
            style={{
              marginLeft: "23%",
              padding: "10px",
              fontFamily: "monospace",
            }}
          >
            YOU SEARCH FOR BOOKS.
          </h1>
          <hr
            style={{
              display: "block",
              height: "1px",
              width: "50%",
              border: "0",
              borderTop: "5px solid #f29161",
              margin: "",
              padding: "0",
            }}
          />
        </div>

        <CardDeck id="card">
          <Card
            style={{
              padding: "2%",
              width: "60%",
              height: "auto",
              backgroundColor: "white",
              border: "10px white",
              fontFamily: "monospace",
              margin: "1%",
              boxShadow: "-13px 12px 13px 10px #ccc",
              borderRadius: "25px",
            }}
          >
            <Card.Img variant="top" src="../photos/smallbook4.jpg" />
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
              border: "10px white",
              fontFamily: "monospace",
              margin: "1%",
              boxShadow: "-13px 12px 13px 10px #ccc",
              borderRadius: "25px",
            }}
          >
            <Card.Img variant="top" src="../photos/smallbook2.jpg" />
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
              border: "10px white",
              fontFamily: "monospace",
              margin: "1%",
              boxShadow: "-13px 12px 13px 10px #ccc",
              borderRadius: "25px",
            }}
          >
            <Card.Img variant="top" src="../photos/smallbook3.jpg" />
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
