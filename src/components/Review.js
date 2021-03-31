import React, { useState, useEffect } from "react";
import axios from "axios";
import ListOfReviews from "./ListOfReviews";
import { Row } from "react-bootstrap";

const Review = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_KEY

  function handleChange (ev) {
    const book = ev.target.value
    setSearch(book)
  }
  function handleSubmit (ev) {
    ev.preventDefault()

    axios
     .get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${search}&key=${GOOGLE_KEY}&maxResults=20`)
      .then((resp) => setBooks(resp.data.items));
  }
  // const filteredReview = review.filter((rev) => {
  //   return rev.title.toLowerCase().includes(search.toLowerCase());
  // });
  console.log(books)
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
          <h1>Author Section</h1>
          <hr />
          <h5>
            We want the books to be great and readable. so we set up a system to
            do just that. You can review any book you want. You can also search
            for any review you want with our simple search function.
          </h5>
        </div>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="text-center"
          placeholder="Search By Author"
          onChange={handleChange}
          style={{
            width: "70%",
            padding: "10%",
            marginLeft: "17%",
            marginTop: "5px",
            marginBottom: "40px",
            outline: "none",
            boxShadow: "10px 10px",
            borderRadius: "20px",
            fontFamily:"monospace",
            fontSize:"300%"
            
          }}
        />
        </form>
        
        <Row>
          {/* {books.map((book) => (
            <ListOfAudibles
              key={book.id}
              id={book.id}
              title={book.volumeInfo.title}
              by={book.volumeInfo.authors}
              language={book.volumeInfo.language}
              categories={book.volumeInfo.categories}
              pageCount={book.volumeInfo.pageCount}
              image={book.volumeInfo.imageLinks}
              bookLink={book.volumeInfo.infoLink}
              price={book.saleInfo.listPrice}
              description={book.volumeInfo.description}
              averageRating={book.volumeInfo.averageRating}
            />
          ))}  */}
        </Row>
      </div>
    </>
  );
};
export default Review;
