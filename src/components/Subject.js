import React, { useState } from "react";
import axios from "axios";
import ListOfSubject from "./ListOfSubject";
import { Row } from "react-bootstrap";

const Subject = () => {
  const [subject, setSubject] = useState([]);
  const [search, setSearch] = useState("");
  const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_KEY

  function handleChange (ev) {
    const book = ev.target.value
    setSearch(book)
  }
  function handleSubmit (ev) {
    ev.preventDefault()

    axios
     .get(`https://www.googleapis.com/books/v1/volumes?q=subject:${search}&key=${GOOGLE_KEY}&maxResults=20`)
      .then((resp) => setSubject(resp.data.items || []))
      .catch(error => {
       alert(error.response.data.error)
     })
  }
  // const filteredReview = review.filter((rev) => {
  //   return rev.title.toLowerCase().includes(search.toLowerCase());
  // });
  console.log(subject)
  return (
    <>
      <div id="subject"style={{ marginBottom: "9%", marginTop: "9%" }}>
       
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
          <h1>Search by Subject</h1>
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
          placeholder="Search By Subject"
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
    </>
  );
};
export default Subject;

