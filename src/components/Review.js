import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ListOfReviews from "./ListOfReviews";
import { Container, Row } from "react-bootstrap";

const Review = () => {
  const [review, setReview] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get("http://localhost:3001/reviews")
      .then((resp) => setReview(resp.data));
  }, []);

  const filteredReview = review.filter( rev => {
    return rev.title.toLowerCase().includes(search.toLowerCase())
  } )

  return (
    <>
      <input type="text" style={{width:"50%", marginLeft:"25%", marginTop:"50px", marginBottom:"40px"}} className="text-center" placeholder="search for review" onChange={ e => setSearch(e.target.value)}/>
      <Container>
        <Row>
          {filteredReview.map((review) => (
            <ListOfReviews
              key={review.id}
              id={review.id}
              title={review.title}
              description={review.description}
              rating={review.rating}
              audibleId={review.audible_id}
            />
          ))}
          <Link
            to="/addReview"
            style={{ display: "flex", margin: "50px", marginLeft: "100px", marginBottom:"100px" , width: "100%"}} className="btn btn-primary btn-lg "
          >
            {" "}
            add review{" "}
          </Link>
        </Row>
      </Container>
    </>
  );
};
export default Review;
