import React from 'react'
import { Card, Col} from "react-bootstrap";
import { Link } from "react-router-dom";

const ListOfReview = ({id, title, description, rating, audibleId}) => {
    return (
      <Col xs={12} lg={4}>
        <Card style={{ display: "flex", margin: "40px", marginRight: "100px", width: "90%", height:"45vmin"}}>
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
        </Card.Body>
          <Link
            className="btn btn-warning mr-1 btn-lg btn-block"
            to={`/editReview/${id}`}
          >
            edit
          </Link>
      </Card>
      </Col>
    )
}

export default ListOfReview
