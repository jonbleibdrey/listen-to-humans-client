import React, { useState } from "react";
import axios from "axios";
import ListOfSubject from "./ListOfSubject";
import { Row } from "react-bootstrap";
import InformationSubject from "./InformationSubject";

const Subject = () => {
  const [subject, setSubject] = useState([]);
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
        `https://www.googleapis.com/books/v1/volumes?q=subject:${search}&key=${GOOGLE_KEY}&maxResults=20`
      )
      .then((resp) => setSubject(resp.data.items || []))
      .catch((error) => {
        alert(error.response.data.error);
      });
  }

  return (
    <>
      <div id="subject">
        <div style={{ padding: "10%" }}>
          <InformationSubject />
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="text-center"
            placeholder="Search By Subject"
            onChange={handleChange}
            style={{
              width: "70%",
              padding: "10%",
              marginLeft: "17%",
              marginBottom: "5%",
              outline: "none",
              border: "10px white",
              boxShadow: "-13px 20px 15px 19px #ccc",
              borderRadius: "50px",
              fontFamily: "monospace",
              fontSize: "300%",
            }}
          />
        </form>

        <Row>
          {subject.map((sub) => (
            <ListOfSubject
              key={sub.id}
              id={sub.id}
              author={sub.volumeInfo.authors}
              title={sub.volumeInfo.title}
              language={sub.volumeInfo.language}
              categories={sub.volumeInfo.categories}
              pageCount={sub.volumeInfo.pageCount}
              image={sub.volumeInfo.imageLinks}
              bookLink={sub.volumeInfo.infoLink}
              price={sub.saleInfo.listPrice}
              description={sub.volumeInfo.description}
              averageRating={sub.volumeInfo.averageRating}
            />
          ))}
        </Row>
      </div>
      <hr
        style={{
          width: "98%",
          border: "20px solid white",
          marginTop: "5%",
          boxShadow: "-3px 10px 20px  #ccc",
        }}
      />
    </>
  );
};
export default Subject;
