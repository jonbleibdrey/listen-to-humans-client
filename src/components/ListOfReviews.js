import React from 'react'
import { Card, CardDeck} from "react-bootstrap";
import { Link } from "react-router-dom";

const ListOfReview = ({id, title, description, rating, audibleId}) => {
    return (
        <Card style={{ width: "25rem", margin: "40px" }}>
        <Card.Body className="card text-center">
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            description: {description}
          </Card.Subtitle>
          <Card.Text>
            rating: {rating}
            <br />
          </Card.Text>
          <Link
            className="btn btn-warning mr-1 btn-lg btn-block"
            to={`/edit/${id}`}
          >
            edit
          </Link>
        </Card.Body>
      </Card>
    )
}

export default ListOfReview
