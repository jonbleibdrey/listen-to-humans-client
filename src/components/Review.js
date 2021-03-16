import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ListOfReviews from "./ListOfReviews";
import { Container, Row } from "react-bootstrap";

const Review = () => {
  const [review, setReview] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/reviews")
      .then((resp) => setReview(resp.data));
  }, []);

  const filteredReview = review.filter((rev) => {
    return rev.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div id="review">
        <div
          style={{
            margin: "40px",
            padding: "2%",
            marginLeft: "20%",
            width: "60%",
            height: "100%",
            backgroundColor: "white",
            border: "1px solid gray",
            fontFamily: "monospace",
            boxShadow: "10px 20px",
            borderRadius: "20px",
          }}
        >
          <h2 className="animate__animated animate__bounceInRight">
            Review section
          </h2>
          <p>
            We want the books to be great and readable. so we set up a system to
            do just that. Plain and simple, you can review any book you want.
            You can also search for any review you would like.
          </p>
        </div>
        <input
          type="text"
          style={{
            width: "50%",
            marginLeft: "25%",
            marginTop: "50px",
            marginBottom: "40px",
            boxShadow: "10px 10px",
            borderRadius: "20px",
            outline:"none"
          }}
          className="text-center"
          placeholder="search for review"
          onChange={(e) => setSearch(e.target.value)}
        />
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
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Review;
