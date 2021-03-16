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
import AudioP from "./AudioP";

//import DropZone from "./DropZone";

export class AddAudible extends Component {
  state = {
    title: "",
    by: "",
    language: "",
    audio_file: "",
    track: "",
  };

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleFileUpload = (e) => {
    this.setState({
      track: e.target.files[0],
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.track);

    // let data = {
    //   title: this.state.title,
    //   by: this.state.by,
    //   language: this.state.language,
    //   audio_file: this.state.audio_file,
    //   track: this.state.track,
    // };
    //formData.append("audible", JSON.stringify(data));
    const formData = new FormData();

    formData.append("audible[title]", this.state.title);
    formData.append("audible[by]", this.state.by);
    formData.append("audible[language]", this.state.language);
    formData.append("audible[audio_file]", this.state.audio_file);
    formData.append("audible[track]", this.state.track);

    axios
      .post("http://localhost:3001/audibles", formData)
      .then((res) => console.log(res, formData))
      .then((data) => alert("horray it worked"))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <div
          id="addAudible"
          style={{
            margin: "40px",
            padding: "3%",
            marginLeft: "20%",
            width: "60%",
            height: "100%",
            backgroundColor: "white",
            border: "1px solid gray",
            fontFamily: "monospace",
            boxShadow: "10px 20px",
            borderRadius: "20px",
          }}
        >
          <h1 className="animate__animated animate__bounceInDown">
            Add Audible
          </h1>
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
                    placeholder="Delete me after track works"
                    value={this.state.audio_file}
                    onChange={this.handleOnChange}
                    name="audio_file"
                  ></FormControl>
                  <FormLabel> Tracks: </FormLabel>
                  <Form.File>
                    <Form.File.Input
                      type="file"
                      accept=".mp3,audio/*"
                      placeholder="Audio file here"
                      onChange={this.handleFileUpload}
                      name="track"
                    />
                  </Form.File>
                </FormGroup>
                <Button type="submit" style={{boxShadow: "10px 10px black",
              borderRadius: "20px",}}> Submit </Button>
                <Link to="/" className="btn btn-danger ml-2" style={{boxShadow: "10px 10px black",
              borderRadius: "20px",}}>
                  Cancel
                </Link>
              </Form>
            </Col>
          </Row>
        </Container>
        <div
          style={{
            margin: "40px",
            padding: "3%",
            marginLeft: "20%",
            marginBottom: "9%",
            width: "60%",
            height: "100%",
            backgroundColor: "white",
            border: "1px solid gray",
            fontFamily: "monospace",
            boxShadow: "5px 10px",
            borderRadius: "20px",
          }}
        >
          <h1 className="animate__animated animate__bounceInDown">
            Record audio
          </h1>
          <p>
            {" "}
            Here we can record our book, then simply add to the new audible.
            This feature is coming soon!
          </p>
          <AudioP />
          {/* <DropZone/> */}
        </div>
      </>
    );
  }
}

export default AddAudible;
