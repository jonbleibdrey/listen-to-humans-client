import React, { useState, useEffect } from "react";
import axios from 'axios'

const Home = () => {
  const [audible, setAudible] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/audibles')
    .then(resp => setAudible(resp.data))
  }, [])

  return (
    <div>
      <h1>Home page</h1>
      <div>{audible.map((audible) => (
          <div key={audible.id}> {audible.title}</div>
      ))} </div>
    </div>
  );
};

export default Home;
