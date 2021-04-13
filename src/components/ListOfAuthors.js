import React from "react";
import { Card, Col, Modal, Button } from "react-bootstrap";
import "../css/List/author.css";

const ListOfAuthors = ({
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
      <Card className="p-3" id="authors__card">
        <Card.Body>
          <Card.Title>
            <a
              href={bookLink === undefined ? "not available" : bookLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="authors__img"
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
            <br />
            <h4 className="authors__h2">
              Author name:
              <br />
              {author}
            </h4>
          </Card.Title>

          <hr />
          <Card.Title>
            <h5 className="authors__h5">
              Title of Book:
              <br />
              {title === undefined ? "not available" : title}
            </h5>
          </Card.Title>
          <hr />
          <Card.Text>
            <h6>
              category:{" "}
              {categories === undefined ? "not available" : categories}
            </h6>
            <br />
          </Card.Text>
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

export default ListOfAuthors;
