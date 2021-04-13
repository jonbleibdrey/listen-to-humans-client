import React from "react";
import { Col, Container, Row, Card, CardDeck } from "react-bootstrap";
import { FaBookDead } from "react-icons/fa";
import { FaBookMedical } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import "../css/GoogleApi/googleApi.css";
import InformationGoogleApi from "./InformationGoogleApi";

const GoogleApi = () => {
  return (
    <>
      <div id="googleApi">
        <InformationGoogleApi />
        <Container>
          <Row>
            <Col xs={12} lg={6}>
              <CardDeck>
                <Card
                  className="googleApi__card"
                  style={{
                    borderRadius: "50px",
                  }}
                >
                  <Card.Body>
                    <FaBook />
                    <Card.Title>
                      Google APIs are application programming interfaces.
                    </Card.Title>
                    <Card.Text>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Enim qui eum rerum aliquam labore commodi corrupti, fuga
                      quaerat animi dignissimos accusamus veritatis iure,
                      deleniti non repudiandae obcaecati sapiente fugiat
                      quibusdam!
                    </Card.Text>
                    <FaBookMedical />
                    <Card.Title>
                      They allow communication with Google Services
                    </Card.Title>
                    <Card.Text>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Enim qui eum rerum aliquam labore commodi corrupti, fuga
                      quaerat animi dignissimos accusamus veritatis iure,
                      deleniti non repudiandae obcaecati sapiente fugiat
                      quibusdam!
                    </Card.Text>
                    <FaBookDead />
                    <Card.Title>
                      Third-party apps can use these APIs to take advantage of
                    </Card.Title>
                    <Card.Text>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Enim qui eum rerum aliquam labore commodi corrupti, fuga
                      quaerat animi dignissimos accusamus veritatis iure,
                      deleniti non repudiandae obcaecati sapiente fugiat
                      quibusdam!
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Col>
            <Col xs={2} lg={6}>
              <div className="googleApi_imgDiv">
                <img
                  className="googleApi__img"
                  src="../photos/googlepng.PNG"
                  alt="google"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default GoogleApi;
