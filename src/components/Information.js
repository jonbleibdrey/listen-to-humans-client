import React from "react";

const Information = () => {
  return (
    <div
      style={{
        margin: "4%",
        padding: "40px",
        marginLeft: "22%",
        width: "60%",
        fontFamily: "monospace",
        boxShadow: "10px 20px",
        borderRadius: "20px",
      }}
    >
        <img
          className="animate__animated animate__bounceInDown"
          src="../logo1.PNG"
          alt="logo"
          style={{
            width: "10vw",
            height: "10%",
            float: "left",
            backgroundColor:"white"
          }}
        />
      <h1 className="animate__animated animate__bounceInDown">
        A site to search google's massive API of books.
      </h1>
      <hr />
      <h6>
        WE GOT BOOKS! If you're a college student trying to find a book
        for your next exam WE GOT IT, If your a doctor trying to find a book on how to do
        surgery WE GOT IT, even If your a tech guy looking for how to do data and
        algorithms, WE GOT IT!
      </h6>
    </div>
  );
};

export default Information;
