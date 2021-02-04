import axios from "axios";
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

  handleOnSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/audibles", {
        title: this.state.title,
        by: this.state.by,
        language: this.state.language,
        audio_file: this.state.audio_file,
      })
      .then((res) => console.log(res))
      .then((data) => this.props.history.push("/"))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Add Audible</h1>
        <Form onSubmit={this.handleOnSubmit}>
          <FormGroup>
            <FormLabel> Title </FormLabel>
            <FormControl
              type="text"
              placeholder="Enter Title"
              value={this.state.title}
              onChange={this.handleOnChange}
              name="title"
            ></FormControl>
            <FormLabel> By: </FormLabel>
            <FormControl
              type="text"
              placeholder="Created By"
              value={this.state.by}
              onChange={this.handleOnChange}
              name="by"
            ></FormControl>
            <FormLabel> Language: </FormLabel>
            <FormControl
              type="text"
              placeholder="Language read in"
              value={this.state.language}
              onChange={this.handleOnChange}
              name="language"
            ></FormControl>
            <FormLabel> Audible: </FormLabel>
            <FormControl
              type="text"
              placeholder="Audio file here"
              value={this.state.audio_file}
              onChange={this.handleOnChange}
              name="audio_file"
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
