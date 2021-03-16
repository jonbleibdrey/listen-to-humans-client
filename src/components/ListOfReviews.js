import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const ListOfReview = ({ id, title, description, rating, audibleId }) => {
  return (
    <Col xs={12} lg={4}>
      <Card
        style={{
          flex: 1,
          display: "inline-block",
          margin: "40px",
          marginRight: "50%",
          width: "90%",
          height: "40vw",
          fontFamily: "monospace",
         
        }}
      >
        <Card.Body >
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
        </Card.Body>
      </Card>
          <Link
          style={{ display: "inline-block",  margin: "4%",
          padding: "40px",
          backgroundColor: "white",
          color:"black",
          marginLeft: "25%",
          width: "60%",
          border: "1px solid gray",
          fontFamily: "monospace",
          boxShadow: "10px 20px black",
        }}
            className="btn btn-primary mr-1 btn-lg btn-block"
            to={`/editReview/${id}`}
            onClick={scroll.scrollToTop()}
          >
            edit
          </Link>
    </Col>
  );
};

export default ListOfReview;
