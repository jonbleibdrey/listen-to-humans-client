import React from "react";

const InformationAuthor = () => {
  return (
    <div>
      <div
        className="info"
        style={{
          padding: "2%",
          marginLeft: "20%",
          width: "60%",
          height: "auto",
          backgroundColor: "white",
          fontFamily: "monospace",
          boxShadow: "-10px 12px 15px 10px #ccc",
          borderRadius: "20px",
        }}
      >
        <h1>Author Section</h1>
        <hr />
        <h5>
          We want the books to be great and readable. so we set up a system to
          do just that. You can review any book you want. You can also search
          for any review you want with our simple search function.
        </h5>
      </div>
    </div>
  );
};

export default InformationAuthor;
