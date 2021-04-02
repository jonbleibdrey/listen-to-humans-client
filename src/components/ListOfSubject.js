import React from "react";
import { Card, Col, Accordion, Button, Modal } from "react-bootstrap";

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
  language,
}) => {
  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{description === undefined ? "not available" : description}</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <Col xs={12} lg={4}>
      <Card
        className="mx-auto"
        style={{
          color: "black",
          objectFit: "cover",
          margin: "5%",
          minHeight: "900px",
          maxHeight: "1200px",
          padding: "10%",
          marginBottom: "10%",
          fontFamily: "monospace",
          boxShadow: "10px 20px",
          borderRadius: "20px",
          textAlign: "center",
        }}
      >
        <Card.Body>
          <Card.Text>
            <h4>
              categorie:{" "}
              {categories === undefined ? "not available" : categories}
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
              <img
                src={image === undefined ? "" : `${image.thumbnail}`}
                alt={image === undefined ? "" : `${image.thumbnail}`}
              />
            </a>
            <h4>
              Title of Book:
              {title === undefined ? "not available" : title}
            </h4>
          </Card.Title>
          <hr />
          <hr />
          <Card.Text>
            <h4>
              page count:{" "}
              {pageCount === undefined ? "not available" : pageCount}
            </h4>
            <br />
          </Card.Text>
          <hr />
          <Card.Text>
            <h4>
              language: {language === undefined ? "not available" : language}
            </h4>
            <br />
          </Card.Text>
          <hr />
          <Card.Subtitle>
            <h4>
              rating's:{" "}
              {averageRating === undefined ? "not available" : averageRating}
            </h4>
          </Card.Subtitle>
          <hr />
          <Card.Subtitle>
            <h4>
              price: {price === undefined ? "not available" : price.amount}
            </h4>
          </Card.Subtitle>
          <hr />
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Read description
          </Button>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <hr />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ListOfSubject;
