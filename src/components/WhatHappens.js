import React from "react";
import { Card } from "react-bootstrap";
import "../css/WhatHappens/whatHappens.css";
import InformationWhatHappens from "./informationWhatHappens";

const WhatHappens = () => {
  return (
    <div id="whatHappens">
      <InformationWhatHappens />
      <div className="whatHappens__cardWrap">
        <Card
          className="whatHappens__card"
          style={{
            borderRadius: "25px",
          }}
        >
          <Card.Img variant="top" src="../photos/smallbook4.jpg" />
          <Card.Body>
            <Card.Title>01. Type in search bar</Card.Title>
            <Card.Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim qui
              eum rerum aliquam labore commodi corrupti, fuga quaerat animi
              dignissimos accusamus veritatis iure, deleniti non repudiandae
              obcaecati sapiente fugiat quibusdam!
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          className="whatHappens__card"
          style={{
            borderRadius: "25px",
          }}
        >
          <Card.Img variant="top" src="../photos/smallbook2.jpg" />
          <Card.Body>
            <Card.Title>02. Find book and click</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
              fugit, ipsum ab corrupti vel pariatur quam provident eveniet rerum
              esse nemo quis laboriosam corporis. Doloremque quae optio beatae
              laborum ab.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          className="whatHappens__card"
          style={{
            borderRadius: "25px",
          }}
        >
          <Card.Img variant="top" src="../photos/smallbook3.jpg" />
          <Card.Body>
            <Card.Title>03. Read till your hearts content</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, suscipit impedit. Quaerat, impedit? Quam impedit
              pariatur earum itaque mollitia tenetur beatae perferendis ad error
              suscipit, voluptates, soluta vel culpa qui?
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default WhatHappens;
