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
            flex: 1,
            display: "inline-block",
            margin: "40px",
            marginRight: "100px",
            width: "90%",
            height: "auto",
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
            <h3>Review's</h3>
            <Card.Body>
              {all.reviews.map((review) => (
                <Link style={{ color: "black" }} key={review.id} to={"/review"}>
                  <ul>
                    <li>{review.title}</li>
                  </ul>
                </Link>
              ))}
              <Link
                style={{ display: "inline-block" }}
                className="btn btn-warning mr-1 btn-lg btn-block"
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
