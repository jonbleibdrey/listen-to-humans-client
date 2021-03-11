import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
//import Mp3 from "../mp3/160656b9-3554-4c2c-a492-4ea3c3c25e11.mp3"

export const ListOfAudibles = ({
  title,
  by,
  language,
  audio,
  id,
  all,
  track,
}) => {
 
  const link = `http://localhost:3001${track}`;

  useEffect(() => {
    console.log("this is the url to blob --->", link);
    // const a = document.getElementById("audioP")
    // a.play()
  });

  // const handlePlay = () => {
  //   const aud = new Audio(link)
  //   console.log(aud)
  //       aud
  //         .then(go => {
  //           // Automatic playback started!
  //           // Show playing UI.
  //           console.log("worked", go);
  //         })
  //         .catch(error => {
  //           // Auto-play was prevented
  //           // Show paused UI.
  //           console.log(error);
  //         });
      
  // }


  return (
    <Col xs={12} lg={4}>
      <Accordion defaultActiveKey="0">
        <Card
          style={{
            flex: 1,
            display: "inline-block",
            margin: "40px",
            marginRight: "50%",
            width: "90%",
            height: "auto",
          }}
        >
          <Card.Body className="card text-center">
            <Card.Title>
              <h4>Title of book: {title}</h4>
            </Card.Title>
            <hr />
            <Card.Subtitle className="mb-2 text-muted">
              <h5>Created by: {by}</h5>
            </Card.Subtitle>
            <hr />
            <Card.Text>
              Language: {language}
              <br />
              Audio file name: {audio}
            </Card.Text>
            <hr/>
            <Card.Text >
              <audio src={link} style={{ filter: "drop-shadow(2px 3px 3px #333)", inlineSize:"100%" }} controls> play</audio>
            </Card.Text>
            <hr />
            <h3>Review's</h3>
            <Card.Body>
              {all.reviews.map((review) => (
                <Link style={{ color: "black" }} key={review.id} to={"/review"}>
                  <ul>
                    <li>{review.title}</li>
                  </ul>
                </Link>
              ))}
              <Link
                style={{ display: "inline-block" }}
                className="btn btn-warning mr-1 btn-lg btn-block"
                to={`/edit/${id}`}
              >
                edit
              </Link>
            </Card.Body>
          </Card.Body>
        </Card>
      </Accordion>
    </Col>
  );
};
