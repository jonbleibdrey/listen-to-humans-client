import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Container } from "react-bootstrap";

export const ListOfAudibles = ({
  title,
  by,
  language,
  audio,
  id,
  all,
  track,
}) => {
  //const link = `https://rails-backend-audible-api.herokuapp${track}`;
  const link = `https://rails-backend-audible-api.herokuapp.com${track}`;
  console.log("linke for audio",link)

  return (
    <Col xs={12} lg={3}>
      <Card
        style={{
          margin: "40px",
          height: "auto",
          minHeight: "40vw",
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
          <h1>Top three Review's</h1>
          <Container>
            <Card.Body>
              {all.reviews.slice(0, 3).map((review) => (
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
          backgroundColor: "white",
          color: "black",
          marginLeft: "20%",
          width: "60%",
          fontFamily: "monospace",
          boxShadow: "10px 20px black",
        }}
        className="btn"
        to={`/edit/${id}`}
      >
        Edit
      </Link>
    </Col>
  );
};
