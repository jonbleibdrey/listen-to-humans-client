import React from "react";
import { Card, Col, Button, Modal } from "react-bootstrap";
import "../css/List/books.css";

const ListOfBooks = ({
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
  averageRating,
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
      <Card className="p-3" id="books__card">
        <Card.Body>
          <Card.Title>
            <a
              href={bookLink === undefined ? "not available" : bookLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="books__img"
                src={
                  image === undefined
                    ? "../photos/logo1.PNG"
                    : `${image.thumbnail}`
                }
                alt={
                  image === undefined
                    ? "../photos/logo1.PNG"
                    : `${image.thumbnail}`
                }
              />
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
            <h6>
              Language: {language === undefined ? "not available" : language}
            </h6>
            <hr />
            <h6>
              category:{" "}
              {categories === undefined ? "not available" : categories}
            </h6>
          </Card.Text>
          <hr />
          <Card.Text>
            <h6>
              Price: {price === undefined ? "not available" : price.amount}
            </h6>
          </Card.Text>
          <hr />
          <Card.Text>
            <h6>
              Page count:{" "}
              {pageCount === undefined ? "not available" : pageCount}
            </h6>
          </Card.Text>
          <hr />
          <Card.Text>
            <h6>
              Rating:{" "}
              {averageRating === undefined ? "not available" : averageRating}
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

export default ListOfBooks;
