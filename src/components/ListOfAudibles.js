import React from "react";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

export const ListOfAudibles = ({ title, by, language, audio, id, all }) => {
  return (
    <Col xs={12} lg={4}>
    <Accordion defaultActiveKey="0" >
      <Card style={{ display: "flex", margin: "40px", marginRight: "100px", width: "90%", height:"45vmin"}}>
        <Card.Body className="card text-center">
          <Card.Title> title of book: {title}</Card.Title>
          <hr />
          <Card.Subtitle className="mb-2 text-muted">
            Created by: {by}
          </Card.Subtitle>
          <hr />
          <Card.Text>
            Language: {language}
            <br />
            Audio file: {audio}
          </Card.Text>
          <hr />

          <Accordion.Toggle as={Card.Header} eventKey="1" >
            <h4>Review's</h4>
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="1">
            <Card.Body>
              {all.reviews.map((review) => (
                <Link key={review.id} to={"/review"}>
                  <ul>
                    <li>{review.title}</li>
                  </ul>
                </Link>
              ))}
            </Card.Body>
          </Accordion.Collapse>
          <Link
            className="btn btn-warning mr-1 btn-lg btn-block"
            to={`/edit/${id}`}
          >
            edit
          </Link>
        </Card.Body>
      </Card>
    </Accordion>
    </Col>
  );
};
