import React from "react";
import { Button, Card, CardDeck } from "react-bootstrap";

const WhatHappens = () => {
  return (
    <>
      <div style={{ padding: "5%", backgroundColor: "white", marginTop: "9%" }}>
        <h3
          style={{
            marginLeft: "40%",
            padding:"30px",
            fontFamily: "initial",
            color:"#ed945c",
          }}
        >
          What Happens Here
        </h3>
        <h1 style={{
            marginLeft: "29%",
            padding:"30px",
            fontFamily: "initial",
          }}>
          BOOKS SEARCH FOR ANYTHING
        </h1>

        <CardDeck>
          <Card style={{
              padding: "2%",
              width: "60%",
              height: "auto",
              backgroundColor: "white",
              border: "1px solid gray",
              fontFamily: "monospace",
              boxShadow: "10px 20px",
              borderRadius: "20px",
            }}>
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
          <Card style={{
              padding: "2%",
              width: "60%",
              height: "auto",
              backgroundColor: "white",
              border: "1px solid gray",
              fontFamily: "monospace",
              boxShadow: "10px 20px",
              borderRadius: "20px",
            }}>
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
          <Card style={{
              padding: "2%",
              width: "60%",
              height: "auto",
              backgroundColor: "white",
              border: "1px solid gray",
              fontFamily: "monospace",
              boxShadow: "10px 20px",
              borderRadius: "20px",
            }}>
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
