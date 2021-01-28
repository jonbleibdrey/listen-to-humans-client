import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


export const ListOfAudibles = ({ title, by, language, audio_file, id }) => {
  return (
    <div>
      <ul>
        <li>Title: {title}</li>
        <li>By: {by}</li>
        <li>Language: {language}</li>
        <li>Audio: {audio_file}</li>
        <Link
          className="btn btn-warning mr-1"
          to={`/edit/${id}`}
        >
          edit
        </Link>
        <Button color="danger"> Delete</Button>
      </ul>
    </div>
  );
};
