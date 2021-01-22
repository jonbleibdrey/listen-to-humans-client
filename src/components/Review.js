import React, {useState, useEffect} from "react";
import axios from "axios";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const Review = () => {

    const [review, setReview] = useState([])
    
    useEffect(() => {
        axios
          .get("http://localhost:3001/reviews")
          .then((resp) => setReview(resp.data));
      }, []);

  return (
    <Jumbotron>
      <Container>
        <h1>review page</h1>
        <p>{review.map((review) => (
            <ul key={review.id}>
                <li>Title: {review.title}</li>
                <li>Description: {review.description}</li>
                <li>Rating: {review.rating}</li>

            </ul>

        ))}</p>
      </Container>
    </Jumbotron>
  );
};
export default Review;
