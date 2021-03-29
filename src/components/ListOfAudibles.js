import React from "react";
import {Link} from "react-router-dom"
import { Card, Col, Container } from "react-bootstrap";

export const ListOfAudibles = ({
  id,
  title,
  by,
  language,
  categories,
  pageCount,
  price,
  buyLink,
  description
}) => {


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
              {title}
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
            <h6>categories: {categories}</h6>
          </Card.Text>
          <hr />
          <Card.Text>
            <h6>page count: {pageCount}</h6>
          </Card.Text>
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
