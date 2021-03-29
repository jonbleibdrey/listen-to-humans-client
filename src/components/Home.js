import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListOfAudibles } from "./ListOfAudibles";
import { Row } from "react-bootstrap";
import Information from "./Information";


const Home = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_KEY
  
  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=javascript&key=${GOOGLE_KEY}`)
      .then((resp) => setBooks(resp.data.items));
      //.then((resp) => console.log("this is the response data",books))
  }, []);


  // const filteredBook = books.filter((book) => {
  //   return book.title.toLowerCase().includes(search.toLowerCase());
  // });


  return (
    <>
      <div id="home" style={{ backgroundColor: "#ebd078", padding: "3%" }}>
        <Information />
        <input
          type="text"
          className="text-center"
          placeholder="Search for Audible"
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "50%",
            marginLeft: "25%",
            marginTop: "5px",
            marginBottom: "40px",
            outline: "none",
            boxShadow: "10px 10px",
            borderRadius: "20px",
          }}
        />
        <Row>
          {console.log(books)}
          {books.map((book) => (
            <ListOfAudibles
              key={book.id}
              id={book.id}
              title={book.volumeInfo.title}
              by={book.volumeInfo.authors[0]}
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
