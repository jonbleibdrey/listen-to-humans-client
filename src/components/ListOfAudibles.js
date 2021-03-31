import React from "react";
import { Card, Col, Accordion, Button} from "react-bootstrap";

export const ListOfAudibles = ({
  id,
  title,
  by,
  language,
  categories,
  pageCount,
  price,
  description,
  image,
  bookLink,
  averageRating
}) => {


  return (
    <Col xs={12} lg={4}>
      <Accordion>
      <Card
        style={{
            color:"black",
            objectFit:"cover",
            padding:"10%",
            marginBottom: "10%",
            fontFamily: "monospace",
            boxShadow: "10px 20px",
            borderRadius: "20px",
            
        }}
      >
        <Card.Body>
          <Card.Title>
            <a href={bookLink === undefined ? "not available" : bookLink} rel="noopener noreferrer" target="_blank" >
          <img src={image === undefined ? "" : `${image.thumbnail}`} alt={image === undefined ? "" : `${image.thumbnail}`} />
          </a>
            <h4>
              Title of Book:
              <br />
              {title === undefined ? "not available" : title}
            </h4>
          </Card.Title>
          <hr />
          <Card.Subtitle>
            <h5>
              Authors:
              {by === undefined ? "not available" : by}
            </h5>
          </Card.Subtitle>
          <hr />
          <Card.Text>
            <h6>Language: {language === undefined ? "not available" : language}</h6>
            <br />
            <h6>Categories: {categories === undefined ? "not available" : categories}</h6>
          </Card.Text>
          <Card.Text>
            <h6>Price: {price === undefined ? "not available" : price.amount}</h6>
            <br />
          </Card.Text>
          <hr />
          <Card.Text>
            <h6>Page count: {pageCount === undefined ? "not available" : pageCount}</h6>
          </Card.Text>
          <hr />
          <Card.Text>
            <h6>Rating: {averageRating === undefined ? "not available" : averageRating}</h6>
          </Card.Text>
          <hr />
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            click to read more!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
          <Card.Text>
            <h6>Description: {description === undefined ? "not available" : description}</h6>
          </Card.Text>
          </Accordion.Collapse>
          <hr />
        </Card.Body>
      </Card>
      </Accordion>
    </Col>
  );
};
