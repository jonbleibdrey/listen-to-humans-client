import React from "react";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

export const ListOfAudibles = ({ title, by, language, audio, id, all }) => {
  return (
    <Col xs={12} lg={4}>
      <Accordion defaultActiveKey="0">
        <Card
          style={{
            display: "flex",
            margin: "40px",
            marginRight: "100px",
            marginBottom: "20%",
            width: "90%",
            height: "45vmin",
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
              Audio file: {audio}
            </Card.Text>
            <hr />

            <Accordion.Toggle as={Card.Header} eventKey="1">
              <h3>Review's</h3>
            </Accordion.Toggle>

            <Accordion.Collapse
              style={{ backgroundColor: "#fffbfff", zIndex:"revert" }}
              eventKey="1"
            >
              <Card.Body>
                {all.reviews.map((review) => (
                  <Link
                    style={{ color: "black" }}
                    key={review.id}
                    to={"/review"}
                  >
                    <ul>
                      <li>{review.title}</li>
                    </ul>
                  </Link>
                ))}
              </Card.Body>
            </Accordion.Collapse>
          </Card.Body>
          <Link
            className="btn btn-warning mr-1 btn-lg btn-block"
            to={`/edit/${id}`}
          >
            edit
          </Link>
        </Card>
      </Accordion>
    </Col>
  );
};
