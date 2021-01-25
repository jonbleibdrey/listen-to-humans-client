import React, {useState, useEffect} from "react";
import { Form, FormGroup, FormLabel, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddAudible = () => {

  return (
    <Form>
      <FormGroup>
        <FormLabel> Title </FormLabel>
        <FormControl type="text" placeholder="Enter Title" ></FormControl>
        <FormLabel> By: </FormLabel>
        <FormControl type="text" placeholder="Created By" ></FormControl>
        <FormLabel> Language: </FormLabel>
        <FormControl type="text" placeholder="Language read in" ></FormControl>
        <FormLabel> Audible: </FormLabel>
        <FormControl type="text" placeholder="Audio file here" ></FormControl>
      </FormGroup>
      <Button type="submit"> Submit </Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  );
};

export default AddAudible;
