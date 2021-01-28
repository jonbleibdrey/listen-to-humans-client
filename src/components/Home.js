import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { ListOfAudibles } from "./ListOfAudibles";


const Home = () => {
  const [audible, setAudible] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/audibles")
      .then((resp) => setAudible(resp.data));
  }, []);

  return (
    <>
      <Jumbotron>
        <Container>
          <h1>Home page</h1>
          <div>
            {audible.map((audible) => (
              <ListOfAudibles
                key={audible.id}
                id={audible.id}
                title={audible.title}
                by={audible.by}
                language={audible.language}
                audio={audible.audio_file}
              />
            ))}
          </div>
        </Container>
        <Link to="/add" className="btn btn-primary ml-2">
          {" "}
          add book{" "}
        </Link>
      </Jumbotron>
    </>
  );
};

export default Home;
