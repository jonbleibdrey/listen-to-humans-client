import React, { useState, useEffect } from "react";

const Home = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([])

  const fetchItems = async () => {
    const data = await fetch("http://localhost:3001/audibles");

    const items = await data.json()
    console.log(items);
  };

  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};

export default Home;
