import React from "react";
import { Link } from "react-router-dom";
import { Card} from "react-bootstrap";

export const ListOfAudibles = ({ title, by, language, audio, id }) => {
  return (
  
      <Card style={{ width: "25rem", margin: "40px" }}>
        <Card.Body className="card text-center">
          <Card.Title> title of book: {title}</Card.Title>
          <hr/>
          <Card.Subtitle className="mb-2 text-muted">
            Created by: {by}
          </Card.Subtitle>
          <hr/>
          <Card.Text>
            Language: {language}
            <br />
            Audio: {audio}
          </Card.Text>
          <hr/>
          <Link
            className="btn btn-warning mr-1 btn-lg btn-block"
            to={`/edit/${id}`}
          >
            edit
          </Link>
        </Card.Body>
      </Card>

  );
};
