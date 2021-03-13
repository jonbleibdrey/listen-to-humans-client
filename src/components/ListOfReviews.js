import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {  animateScroll as scroll } from "react-scroll";

const ListOfReview = ({ id, title, description, rating, audibleId }) => {
  return (
    <Col xs={12} lg={4}>
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
            <h4>
              Title of Review:
              <Link style={{ color: "black" }} to={"/"}>
                {title}
              </Link>
            </h4>
          </Card.Title>
          <hr />
          <Card.Subtitle className="mb-2 text-muted">
            <h4>rating's: {rating}</h4>
          </Card.Subtitle>
          <hr />
          <Card.Text>
            description's: {description}
            <br />
          </Card.Text>
          <hr />
          <Link
            className="btn btn-warning mr-1 btn-lg btn-block"
            to={`/editReview/${id}`}
            onClick={ scroll.scrollToTop()}
          >
            edit
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ListOfReview;
