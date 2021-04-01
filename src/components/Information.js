import React from "react";
import Jumbotron from "react-bootstrap"

const Information = () => {
  return (
    <div
    >
        <img
          className="animate__animated animate__fadeIn"
          src="../logo1.PNG"
          alt="logo"
          style={{
            width: "30%",
            height: "5%",
            float: "center",
            marginLeft:"35%"
          }}
        />
      <h1 className="animate__animated animate__fadeIn" style={{
        margin: "1%",
        padding: "40px",
        marginLeft: "22%",
        color:"white",
        width: "60%",
        fontFamily: "monospace",
        fontSize:"5vw"
        
      }}>
        READ BY HUMANS.
      </h1>
      <h6 style={{
        margin: "1%",
        marginLeft: "22%",
        marginTop:'3%',
        marginBottom:"5%",
        color:"white",
        width: "60%",
        fontFamily: "monospace",
        fontSize:"2vw"
        
      }}>
      A site to search google's API for books.
      </h6>
    </div>
  );
};

export default Information;


// WE GOT BOOKS! If you're a college student trying to find a book
//         for your next exam WE GOT IT, If your a doctor trying to find a book on how to do
//         surgery WE GOT IT, even If your a tech guy looking for how to do data and
//         algorithms, WE GOT IT!