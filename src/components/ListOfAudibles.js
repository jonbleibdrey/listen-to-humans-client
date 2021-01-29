import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


export const ListOfAudibles = ({ title, by, language, audio, id }) => {
  return (
    <div>
      <ul>
        <li>Title: {title}</li>
        <li>By: {by}</li>
        <li>Language: {language}</li>
        <li>Audio: {audio}</li>
        <Link
          className="btn btn-warning mr-1"
          to={`/edit/${id}`}
        >
          edit
        </Link>
      </ul>
    </div>
  );
};
