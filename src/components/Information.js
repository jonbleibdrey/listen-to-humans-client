import React from "react";
import "../css/Information/information.css";

const Information = () => {
  return (
    <div>
      <img
        className="animate__animated animate__fadeIn"
        src="../photos/logo1.PNG"
        alt="logo"
        id="information__img"
      />
      <h1
        className="animate__animated animate__fadeIn"
        id="information__header"
      >
        READ BY HUMANS.
      </h1>
      <h6 className="information__headerText">
        A site to search google's API for books.
      </h6>
    </div>
  );
};

export default Information;
