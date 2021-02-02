import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        <div style={{ width: "50rem" }}>{review.map((review) => (
            <ul key={review.id}>
                <li>Title: {review.title}</li>
                <li>Description: {review.description}</li>
                <li>Rating: {review.rating}</li>
            </ul>
        ))}</div>
            <Link to="/addReview" className="btn btn-primary ml-25 btn-lg ">
            {" "}
            add review{" "}
          </Link>
     </>
  );
};
export default Review;
