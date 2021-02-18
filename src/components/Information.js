import React from "react";

const Information = () => {
  return (
    <div
      style={{
        margin: "4%",
        padding: "40px",
        marginLeft: "22%",
        width: "60%",
        border: "1px solid gray",
        fontFamily: "monospace",
        boxShadow: "10px 20px",
        borderRadius
      }}
    >
      <img
        src="../logo192.png"
        alt="logo"
        style={{ width: "50px", height: "50px", float: "left" }}
      />
      <h4>
        This is a website to listen to audio books from all walks of life.
      </h4>
      <br />
      <p>
        if you're a college student trying to find a book, if your a doctor
        trying to find a book on how to do surgery WE GOT IT and if your a tech
        guy looking for how to do something we have it!
      </p>
    </div>
  );
};

export default Information;
