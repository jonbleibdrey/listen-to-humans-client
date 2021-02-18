import axios from "axios";
import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
  Container,
  Row,
  Col,
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
      <>
        <div
          style={{
            margin: "40px",
            padding: "3%",
            marginLeft: "20%",
            width: "60%",
            height: "100%",
            backgroundColor: "white",
            border: "1px solid gray",
            fontFamily: "monospace",
            boxShadow:"10px 20px",
            borderRadius:"20px"
          }}
        >
          <h1>Add Audible</h1>
          <p>
            {" "}
            Here we clearly, add new audibles. its simple you can either import
            one that you have recorded else where. BUT, you can also record
            straight from here.
          </p>
        </div>
        <Container style={{ margin: "3%", marginLeft: "380px" }}>
          <Row>
            <Col xs={12}>
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
            </Col>
          </Row>
        </Container>
        <div style={{
            margin: "40px",
            padding: "3%",
            marginLeft: "20%",
            marginBottom:"9%" ,
            width: "60%",
            height: "100%",
            backgroundColor: "white",
            border: "1px solid gray",
            fontFamily: "monospace",
            boxShadow:"5px 10px",
            borderRadius:"20px"
          }}>
        <h1>Record audio</h1>
          <p>
            {" "}
            Here we can record our book, then simply add to the new audible. This feature is coming soon!
          </p>
        </div>
      </>
    );
  }
}

export default AddAudible;
