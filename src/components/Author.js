import React, { useState } from "react";
import axios from "axios";
import ListOfAuthors from "./ListOfAuthors";
import { Row } from "react-bootstrap";
import InformationAuthor from "./InformationAuthor";
import "../css/Author/author.css";

const Review = () => {
  const [authors, setAuthors] = useState([]);
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
        `https://www.googleapis.com/books/v1/volumes?q=inauthor:${search}&key=${API_KEY}&maxResults=20`
      )
      .then((resp) => setAuthors(resp.data.items || []));
  }

  return (
    <>
      <div id="author">
        <div className="author__header">
          <InformationAuthor />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="text-center"
            placeholder="Search By Author"
            onChange={handleChange}
            id="author__inputField"
          />
        </form>
        <Row>
          {authors.map((aut) => (
            <ListOfAuthors
              key={aut.id}
              id={aut.id}
              author={aut.volumeInfo.authors}
              title={aut.volumeInfo.title}
              language={aut.volumeInfo.language}
              categories={aut.volumeInfo.categories}
              pageCount={aut.volumeInfo.pageCount}
              image={aut.volumeInfo.imageLinks}
              bookLink={aut.volumeInfo.infoLink}
              price={aut.saleInfo.listPrice}
              description={aut.volumeInfo.description}
              averageRating={aut.volumeInfo.averageRating}
            />
          ))}
        </Row>
      </div>
    </>
  );
};
export default Review;
