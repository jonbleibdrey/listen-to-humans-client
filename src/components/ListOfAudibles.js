import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";


export const ListOfAudibles = ({ title, by, language, audio, id }) => {
  return (
    <Card style={{ width: '25rem', margin: '40px' }}>
        <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Created by: {by}</Card.Subtitle>
        <Card.Text>
        Language: {language}
        <br/>
        Audio: {audio}
        </Card.Text>
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
