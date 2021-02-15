import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { ListOfAudibles } from "./ListOfAudibles";
import { Container, Row } from "react-bootstrap";

const Home = () => {
  const [audible, setAudible] = useState([]);
  const [search, setSearch] = useState('')


  useEffect(() => {
    axios
      .get("http://localhost:3001/audibles")
      .then((resp) => setAudible(resp.data));
  }, []);

  const filteredAudibles = audible.filter( aud => {
    return aud.title.toLowerCase().includes(search.toLowerCase())
  } )

  return (
    <>
      <h1 className="card text-center ">Home page</h1>
      <Container>
      <input type="text" placeholder="search" onChange={ e => setSearch(e.target.value)}/>
        <Row>
          {filteredAudibles.map((audible) => (
            <ListOfAudibles
              key={audible.id}
              id={audible.id}
              title={audible.title}
              by={audible.by}
              language={audible.language}
              audio={audible.audio_file}
              all={audible}
            />
          ))}
          <Link to="/add" style={{ display: "flex", margin: "50px", marginLeft: "100px", width: "100%"}} className="btn btn-primary btn-lg ">
            {" "}
            add book{" "}
          </Link>
        </Row>
      </Container>
    </>
  );
};

export default Home;
