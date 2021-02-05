import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
      <h1 className="card text-center ">Home page</h1>
      <div style={{ width: "50rem" }}>
        {audible.map((audible) => (
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
        <Link to="/add" className="btn btn-primary ml-25 btn-lg ">
          {" "}
          add book{" "}
        </Link>
      </div>
    </>
  );
};

export default Home;
