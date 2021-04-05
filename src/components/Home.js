import React, { useState } from "react";
import axios from "axios";
import { ListOfAudibles } from "./ListOfAudibles";
import { Row } from "react-bootstrap";
import Information from "./Information";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const API_KEY = process.env.REACT_APP_GOOGLE_KEY;

  function handleChange(ev) {
    const book = ev.target.value;
    setSearch(book);
  }

  function handleSubmit(ev) {
    ev.preventDefault();

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}&maxResults=20`
      )
      .then((resp) => setBooks(resp.data.items || []));
  }

  return (
    <>
      <div
        id="home"
        style={{
          backgroundImage: "url(../hallway.jpg)",
          backgroundSize: "contain",
        }}
      >
        <Information />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="text-center"
            placeholder="Search For Book Here"
            onChange={handleChange}
            style={{
              width: "70%",
              padding: "10%",
              marginLeft: "17%",
              marginTop: "5%",
              marginBottom: "40px",
              outline: "none",
              boxShadow: "10px 10px",
              borderRadius: "20px",
              fontFamily: "monospace",
              fontSize: "300%",
            }}
          />
        </form>
        <Row>
          {books.map((book) => (
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
          ))}
        </Row>
      </div>
    </>
  );
};

export default Home;
