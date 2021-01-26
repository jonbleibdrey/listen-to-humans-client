import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export class AddAudible extends Component {
  state = {
    title: "",
    by: "",
    language: "",
    audio_file: "",
  };


  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
    [name]: value,
    });
  };

  // handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.addPart(this.state);
  //   this.setState({
  //     name: "",
  //     damage: "",
  //     ability: "",
  //     weight: "",
  //   });
  // };


  render() {
    return (
      <div>
        <Form >
          <FormGroup>
            <FormLabel> Title </FormLabel>
            <FormControl type="text" placeholder="Enter Title" value={this.state.name} onChange={this.handleOnChange} name="name"></FormControl>
            <FormLabel> By: </FormLabel>
            <FormControl type="text" placeholder="Created By" value={this.state.name} onChange={this.handleOnChange} name="name"></FormControl>
            <FormLabel> Language: </FormLabel>
            <FormControl
              type="text"
              placeholder="Language read in"
              value={this.state.name} onChange={this.handleOnChange} name="name"
            ></FormControl>
            <FormLabel> Audible: </FormLabel>
            <FormControl
              type="text"
              placeholder="Audio file here"
              value={this.state.name} onChange={this.handleOnChange} name="name"
            ></FormControl>
          </FormGroup>
          <Button type="submit"> Submit </Button>
          <Link to="/" className="btn btn-danger ml-2">
            Cancel
          </Link>
        </Form>
      </div>
    );
  }
}

export default AddAudible;
