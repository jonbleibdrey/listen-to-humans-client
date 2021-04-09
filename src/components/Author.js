import React, { useState } from "react";
import axios from "axios";
import ListOfAuthors from "./ListOfAuthors";
import { Row } from "react-bootstrap";
import InformationAuthor from "./InformationAuthor";

const Review = () => {
  const [authors, setAuthors] = useState([]);
  const [search, setSearch] = useState("");
  const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_KEY;

  function handleChange(ev) {
    const book = ev.target.value;
    setSearch(book);
  }
  function handleSubmit(ev) {
    ev.preventDefault();

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=inauthor:${search}&key=${GOOGLE_KEY}&maxResults=20`
      )
      .then((resp) => setAuthors(resp.data.items || []));
  }

  return (
    <>
      <div id="author">
        <div style={{ padding: "10%" }}>
          <InformationAuthor />
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
              marginBottom: "100px",
              outline: "none",
              boxShadow: "-13px 20px 15px 19px #ccc",
              border: "1px white",
              borderRadius: "20px",
              fontFamily: "monospace",
              fontSize: "300%",
            }}
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
      <hr
        style={{
          width: "98%",
          border: "20px solid white",
          marginTop: "5%",
          marginBottom: "5%",
          boxShadow: "-3px 10px 20px  #ccc",
        }}
      />
    </>
  );
};
export default Review;
