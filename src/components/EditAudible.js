import React, {Component} from "react";
import { Form, FormControl, FormGroup, Button, FormLabel } from "react-bootstrap";
import { Link } from "react-router-dom";

class EditAudible extends React.Component {

render(){
  return (
    <>
    <Form>
      <FormGroup>
        <FormLabel> Title: </FormLabel>
        <FormControl type="text" placeholder="Enter Title" ></FormControl>
        <FormLabel> By: </FormLabel>
        <FormControl type="text" placeholder="Created By" ></FormControl>
        <FormLabel> Language: </FormLabel>
        <FormControl type="text" placeholder="Language read in" ></FormControl>
        <FormLabel> Audible: </FormLabel>
        <FormControl type="text" placeholder="Audio file here" ></FormControl>
      </FormGroup>
      <Button type="submit"> Edit </Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
    </>
  );
}};

export default EditAudible;
