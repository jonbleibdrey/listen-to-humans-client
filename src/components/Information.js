import React from "react";

const Information = () => {
  return (
    <div>
      <img
        className="animate__animated animate__fadeIn"
        src="../logo1.PNG"
        alt="logo"
        style={{
          width: "30%",
          height: "5%",
          float: "center",
          marginLeft: "37%",
        }}
      />
      <h1
        className="animate__animated animate__fadeIn"
        style={{
          margin: "1%",
          padding: "40px",
          marginLeft: "27%",
          color: "black",
          width: "60%",
          fontFamily: "monospace",
          fontSize: "5vw",
        }}
      >
        READ BY HUMANS.
      </h1>
      <h6
        style={{
          margin: "1%",
          marginLeft: "34%",
          marginBottom: "5%",
          color: "black",
          width: "60%",
          fontFamily: "initial",
          fontSize: "2vw",
        }}
      >
        A site to search google's API for books.
      </h6>
    </div>
  );
};

export default Information;
