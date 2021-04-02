import React from "react";
import { Card, Col, Accordion, Button } from "react-bootstrap";


const ListOfSubject = ({
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
          <Card.Text>
            <h4>
              categorie: {categories === undefined ? "not available" : categories}
              </h4>
            <br />
          </Card.Text>
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

export default ListOfSubject;
