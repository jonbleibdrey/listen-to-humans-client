import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListOfAudibles } from "./ListOfAudibles";
import { Row } from "react-bootstrap";
import Information from "./Information";


const Home = () => {
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
     .get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${GOOGLE_KEY}&maxResults=20`)
      .then((resp) => setBooks(resp.data.items));
  }


  return (
    <>
      <div id="home" style={{ backgroundColor: "#ebd078", padding: "3%" }}>
        <Information />
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="text-center"
          placeholder="Search for Book"
          onChange={handleChange}
          style={{
            width: "50%",
            padding: "10%",
            marginLeft: "25%",
            marginTop: "5px",
            marginBottom: "40px",
            outline: "none",
            boxShadow: "10px 10px",
            borderRadius: "20px",
            fontFamily:"monospace",
            fontSize:"300%"
            
          }}
        />
        <button style={{
            width: "50%",
            marginLeft: "25%",
            marginTop: "5px",
            marginBottom: "40px",
            outline: "none",
            boxShadow: "10px 10px",
            borderRadius: "20px",
            
          }} >
          click to search
        </button>
        </form>
        <Row>
          {console.log(books)}
          {books.map((book) => (
            <ListOfAudibles
              key={book.id}
              id={book.id}
              title={book.volumeInfo.title}
              by={book.volumeInfo.authors}
              language={book.volumeInfo.language}
              categories={book.volumeInfo.categories}
              pageCount={book.volumeInfo.pageCount}
              image={book.volumeInfo.imageLinks.thumbnail}
              bookLink={book.volumeInfo.infoLink}
              price={book.saleInfo.listPrice}
              description={book.volumeInfo.description}
            />
          ))} 
        </Row>
      </div>
    </>
  );
};

export default Home;
