import React, { useState, useEffect } from "react";
import axios from "axios";
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
      <div id="review" style={{ marginBottom: "9%", marginTop: "9%" }}>
        <div
          style={{
            padding: "2%",
            marginLeft: "20%",
            width: "60%",
            height: "auto",
            backgroundColor: "white",
            border: "1px solid gray",
            fontFamily: "monospace",
            boxShadow: "10px 20px",
            borderRadius: "20px",
          }}
        >
          <h1>Review section</h1>
          <hr />
          <h5>
            We want the books to be great and readable. so we set up a system to
            do just that. You can review any book you want. You can also search
            for any review you want with our simple search function.
          </h5>
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
          }}
          className="text-center"
          placeholder="search for review"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Row>
          {filteredReview.map((review) => (
            <ListOfReviews
              key={review.id}
              id={review.id}
              title={review.title}
              description={review.description}
              rating={review.rating}
              audibleId={review.audible_id}
              audibleName={review.audible.title}
            />
          ))}
        </Row>
      </div>
    </>
  );
};
export default Review;
