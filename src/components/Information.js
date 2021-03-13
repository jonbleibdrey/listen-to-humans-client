import React from "react";

const Information = () => {
  return (
    <div
      style={{
        margin: "4%",
        padding: "40px",
        backgroundColor: "white",
        marginLeft: "22%",
        width: "60%",
        border: "1px solid gray",
        fontFamily: "monospace",
        boxShadow: "10px 20px",
        borderRadius: "20px",
      }}
    >
      <div>
        <img
          className="animate__animated animate__bounceInDown"
          src="../logo192.png"
          alt="logo"
          style={{
            width: "50px",
            height: "50px",
            float: "left",
            margin: "20px",
            marginRight: "50px",
          }}
        />
      </div>
      <h2 className="animate__animated animate__bounceInDown">
        A website to listen and create audio books, even if you don't sound like
        morgan freeman.
      </h2>
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
