import React from "react";




export const ListOfAudibles = ({ title, id }) => {
  return (
    <div>
      <ul>
        <a href={`/show/${id}`}><li>Title: {title}</li></a>
      </ul>
    </div>
  );
};
