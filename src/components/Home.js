import React, { useState, useEffect } from "react";
import axios from "axios";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Home = () => {
  const [audible, setAudible] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/audibles")
      .then((resp) => setAudible(resp.data));
  }, []);

  return (
    <Jumbotron>
      <Container>
        <h1>Home page</h1>
        <div>
          {audible.map((audible) => (
            <ul key={audible.id}>
              <li>Title: {audible.title}</li>
              <li>By: {audible.by}</li>
              <li>Language: {audible.language}</li>
              <li>Audio: {audible.audio_file}</li>
                <Link className='btn btn-warning mr-1' to={`/edit/${audible.id}`}> edit</Link>
                <Button color="danger"> Delete</Button>
            </ul>
          ))}
        </div>
      </Container>
      <Link to="/add" className="btn btn-primary ml-2">
        {" "}
        add book{" "}
      </Link>
    </Jumbotron>
  );
};

export default Home;
