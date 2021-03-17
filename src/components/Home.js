import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { ListOfAudibles } from "./ListOfAudibles";
import { Row } from "react-bootstrap";
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
            outline: "none",
          }}
        />
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
        </Row>
      </div>
    </>
  );
};

export default Home;
