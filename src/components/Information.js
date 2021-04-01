import React from "react";

const Information = () => {
  return (
    <div
    >
        <img
          className="animate__animated animate__bounceInDown"
          src="../logo1.PNG"
          alt="logo"
          style={{
            width: "30%",
            height: "5%",
            float: "center",
            marginLeft:"35%",
            backgroundPosition:"fixed"
          }}
        />
      <h1 className="animate__animated animate__bounceInDown" style={{
        margin: "1%",
        padding: "40px",
        marginLeft: "22%",
        color:"white",
        width: "60%",
        fontFamily: "monospace",
        fontSize:"5vw"
        
      }}>
        Read By Humans.
      </h1>
    </div>
  );
};

export default Information;
