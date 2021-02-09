import React from 'react'
import { Card} from "react-bootstrap";
import { Link } from "react-router-dom";

const ListOfReview = ({id, title, description, rating, audibleId}) => {
    return (
        <Card style={{ width: "25rem", margin: "40px" }}>
        <Card.Body className="card text-center">
          <Card.Title> title of review: <Link to={"/"}> {title}</Link> </Card.Title>
          <hr/>
          <Card.Subtitle className="mb-2 text-muted">
          rating's: {rating}
            
          </Card.Subtitle>
          <hr/>
          <Card.Text>
          description's: {description}
            <br />
          </Card.Text>
          <hr/>
          <Link
            className="btn btn-warning mr-1 btn-lg btn-block"
            to={`/editReview/${id}`}
          >
            edit
          </Link>
        </Card.Body>
      </Card>
    )
}

export default ListOfReview
