import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const ListOfReview = ({
  id,
  author,
  title,
  description,
  averageRating,
  price,
  bookLink,
  image,
  pageCount,
  categories,
  language
  
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
           
            <h2>
              Author name:
              {author}
            </h2>
           
          </Card.Title>
          <hr />
          <Card.Title>
          <a href={bookLink === undefined ? "not available" : bookLink}>
            <img src={image === undefined ? "" : `${image.thumbnail}`} alt={image === undefined ? "" : `${image.thumbnail}`}/>
            </a>
            <h4>
              Title of Book:
              {title === undefined ? "not available" : title}
            </h4>
          </Card.Title>
          <hr />
          <Card.Text>
            <h4>
              categorie: {categories === undefined ? "not available" : categories}
              </h4>
            <br />
          </Card.Text>
          <hr/>
          <Card.Text>
            <h4>
              page count: {pageCount === undefined ? "not available" : pageCount}
              </h4>
            <br />
          </Card.Text>
          <hr/>
          <Card.Text>
            <h4>
              language: {language === undefined ? "not available" : language}
              </h4>
            <br />
          </Card.Text>
          <hr/>
          <Card.Subtitle>
            <h4>rating's: {averageRating === undefined ? "not available" : averageRating}</h4>
          </Card.Subtitle>
          <hr />
          <Card.Subtitle>
            <h4>price: {price === undefined ? "not available" : price.amount}</h4>
          </Card.Subtitle>
          <hr />
          <Card.Text>
            description's: {description === undefined ? "not available" : description}
            <br />
          </Card.Text>
          <hr />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ListOfReview;
