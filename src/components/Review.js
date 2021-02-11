import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ListOfReviews from "./ListOfReviews";
import { Container, Row } from "react-bootstrap";

const Review = () => {

    const [review, setReview] = useState([])
    
    useEffect(() => {
        axios
          .get("http://localhost:3001/reviews")
          .then((resp) => setReview(resp.data));
      }, []);

  return (
   <>
        <h1 className="card text-center ">review page</h1>
        <Container>
        <Row>
          {review.map((review) => (
            <ListOfReviews
            key={review.id}
            id={review.id}
            title={review.title}
            description={review.description}
            rating={review.rating}
            audibleId={review.audible_id}
            />
            
            ))}
            <Link to="/addReview" style={{ display: "flex", margin: "50px", marginLeft: "100px", width: "100%"}} className="btn btn-primary ml-25 btn-lg ">
            {" "}
            add review{" "}
          </Link>
          </Row>
          </Container>
     </>
  );
};
export default Review;
