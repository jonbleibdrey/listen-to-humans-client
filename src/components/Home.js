import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { ListOfAudibles } from "./ListOfAudibles";
import { Container, Row } from "react-bootstrap";
import Information from "./Information";


const Home = () => {
  const [audible, setAudible] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/audibles")
      .then((resp) => setAudible(resp.data));
  }, []);

  const filteredAudibles = audible.filter((aud) => {
    return aud.title.toLowerCase().includes(search.toLowerCase());
  });

  

  return (
    <>
    

      <div id="home" style={{ backgroundColor: "#ebd078", padding: "3%" }}>
        <Information />
        <input
          type="text"
          style={{
            width: "50%",
            marginLeft: "25%",
            marginTop: "5px",
            marginBottom: "40px",
            boxShadow: "10px 10px",
            borderRadius: "20px",
            outline:"none"
          }}
          className="text-center"
          placeholder="search for audible"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Container>
          <Row>
            {filteredAudibles.map((audible) => (
              <ListOfAudibles
                key={audible.id}
                id={audible.id}
                title={audible.title}
                by={audible.by}
                language={audible.language}
                audio={audible.audio_file}
                track={audible.track}
                all={audible}
              />
            ))}
            <Link
              to="/add"
              style={{
                display: "flex",
                margin: "50px",
                marginLeft: "100px",
                marginBottom: "100px",
                width: "100%",
                boxShadow: "10px 20px black",
                borderRadius: "20px",
              }}
              className="btn btn-primary btn-lg "
            >
              {" "}
              add book{" "}
            </Link>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
