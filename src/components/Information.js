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
        fontFamily: "monospace",
        boxShadow: "10px 20px",
        borderRadius: "20px",
      }}
    >
      <div>
        <img
          className="animate__animated animate__bounceInDown"
          src="../logo1.PNG"
          alt="logo"
          style={{
            width: "15%",
            height: "auto",
            float: "left",
          }}
        />
      </div>
      <h1 className="animate__animated animate__bounceInDown">
        A website to listen and create audio books, even if you don't sound like
        morgan freeman.
      </h1>
      <br />
      <hr />
      <h6>
        We got audible books! If you're a college student trying to find a book
        for your next exam, If your a doctor trying to find a book on how to do
        surgery, even If your a tech guy looking for how to do data and
        algorithms, WE GOT IT!
      </h6>
    </div>
  );
};

export default Information;
