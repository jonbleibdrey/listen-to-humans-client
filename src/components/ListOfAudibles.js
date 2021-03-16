import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
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

  useEffect(() => {
    console.log("this is the url to blob --->", link);
  });
  

  return (
    <Col xs={12} lg={4}>
      <Accordion defaultActiveKey="0">
        <Card
          style={{
            flex: 1,
            display: "inline-block",
            margin: "40px",
            marginRight: "50%",
            width: "90%",
            height: "auto",
            fontFamily: "monospace",
          }}
        >
          <Card.Body className="card text-center">
            <Card.Title>
              <h4>Title of book: {title}</h4>
            </Card.Title>
            <hr />
            <Card.Subtitle className="mb-2 text-muted">
              <h5>Created by: {by}</h5>
            </Card.Subtitle>
            <hr />
            <Card.Text>
              Language: {language}
              <br />
              Audio file name: {audio}
            </Card.Text>
            <hr />
            <Card.Text>
              <audio
                src={link}
                style={{
                  
                  inlineSize: "100%",
                }}
                controls
              >
                {" "}
                play
              </audio>
            </Card.Text>
            <hr />
            <h1>Review's</h1>
            <Card.Body>
              {all.reviews.map((review) => (
                <div style={{ color: "black", padding:"10px" }} key={review.id} >
                  <ul>
                    <li>{review.title}</li>
                  </ul>
                </div>
              ))}
              <Link
                style={{ display: "inline-block" }}
                className="btn btn-primary mr-1 btn-lg btn-block"
                to={`/edit/${id}`}
                >
                edit
              </Link>
            </Card.Body>
          </Card.Body>
        </Card>
      </Accordion>
    </Col>
  );
};
