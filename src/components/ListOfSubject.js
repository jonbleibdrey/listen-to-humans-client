import React from "react";
import { Card, Col, Button, Modal } from "react-bootstrap";

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
        style={{
          color: "black",
          objectFit: "cover",
          margin: "5%",
          minHeight: "40vw",
          maxHeight: "120vw",
          padding: "10%",
          marginBottom: "10%",
          fontFamily: "monospace",
          boxShadow: "10px 20px",
          borderRadius: "20px",
          textAlign: "center",
        }}
      >
        <Card.Body>
          <Card.Title>
            <a href={bookLink === undefined ? "not available" : bookLink}>
              <img
                style={{
                  height: "200px",
                  width: "128px",
                  objectFit: "contain",
                }}
                src={
                  image === undefined ? "../logo1.PNG" : `${image.thumbnail}`
                }
                alt={
                  image === undefined ? "../logo1.PNG" : `${image.thumbnail}`
                }
              />
            </a>
            <br />
            <h2 style={{ fontSize: "1vw" }}>
              category:{" "}
              {categories === undefined ? "not available" : categories}
            </h2>
            <hr />
            <br />
          </Card.Title>
          <Card.Title>
            <h2 style={{ fontSize: "1vw" }}>
              Author name:
              <br />
              {author}
            </h2>
          </Card.Title>
          <hr />
          <Card.Title>
            <h4>
              Title of Book:
              <br />
              {title === undefined ? "not available" : title}
            </h4>
          </Card.Title>
          <hr />
          <Card.Text>
            <h6>
              page count:{" "}
              {pageCount === undefined ? "not available" : pageCount}
            </h6>
            <br />
          </Card.Text>
          <hr />
          <Card.Text>
            <h6>
              language: {language === undefined ? "not available" : language}
            </h6>
            <br />
          </Card.Text>
          <hr />
          <Card.Text>
            <h6>
              rating's:{" "}
              {averageRating === undefined ? "not available" : averageRating}
            </h6>
          </Card.Text>
          <hr />
          <Card.Text>
            <h6>
              price: {price === undefined ? "not available" : price.amount}
            </h6>
          </Card.Text>
          <hr />
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Read description
          </Button>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ListOfSubject;
