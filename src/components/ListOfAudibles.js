import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

export const ListOfAudibles = ({
  title,
  by,
  language,
  audio,
  id,
  all,
  track,
}) => {
  const link = `http://localhost:3001${track}`;

  return (
    <Col xs={12} lg={3}>
      <Card
        style={{
          margin: "40px",
          height: "auto",
          fontFamily: "monospace",
        }}
      >
        <Card.Body>
          <Card.Title>
            <h4>
              Title of Book:
              <br />
              {title.toUpperCase()}
            </h4>
          </Card.Title>
          <hr />
          <Card.Subtitle>
            <h5>
              Created by:
              {by}
            </h5>
          </Card.Subtitle>
          <hr />
          <Card.Text>
            <h6>Language: {language}</h6>
            <br />
            <h7>Audio file name: {audio}</h7>
          </Card.Text>
          <hr />
          <Card.Text>
            <h8>Play audio book</h8>
            <audio
              src={link}
              style={{
                inlineSize: "100%",
              }}
              controls
            ></audio>
          </Card.Text>
          <hr />
          <h1>Review's</h1>
          <Container>
            <Card.Body>
              {all.reviews.map((review) => (
                <div
                  style={{ color: "black", padding: "10px" }}
                  key={review.id}
                >
                  <ul>
                    <li>{review.title}</li>
                  </ul>
                </div>
              ))}
            </Card.Body>
          </Container>
        </Card.Body>
      </Card>
      <Link
        style={{
          display: "inline-block",
          margin: "4%",
          padding: "40px",
          backgroundColor: "white",
          color: "black",
          marginLeft: "25%",
          width: "60%",
          border: "1px solid gray",
          fontFamily: "monospace",
          boxShadow: "10px 20px black",
        }}
        className="btn btn-primary mr-1 btn-lg btn-block"
        to={`/edit/${id}`}
      >
        edit
      </Link>
    </Col>
  );
};
