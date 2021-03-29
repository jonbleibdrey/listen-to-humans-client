import React from "react";
import { Card, Col} from "react-bootstrap";

export const ListOfAudibles = ({
  id,
  title,
  by,
  language,
  categories,
  pageCount,
  price,
  buyLink,
  description,
  image,
  bookLink
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
            <a href={bookLink}>
          <img src={image} alt={image}/>
          </a>
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
          <Card.Text>
            <h6>buy Link: {console.log(buyLink)}</h6>
          </Card.Text>
          <hr />
          <Card.Text>
            <h6>description: {description}</h6>
          </Card.Text>
          <hr />
        </Card.Body>
      </Card>
    </Col>
  );
};
