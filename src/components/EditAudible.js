import React, { Component } from "react";
import {
  Form,
  FormControl,
  FormGroup,
  Button,
  FormLabel,
  Row,
  Container,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import axios from "axios";

export class EditAudible extends Component {
  state = {
    title: "",
    by: "",
    language: "",
    audio_file: "",
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://localhost:3001/audibles/${id}`)
      .then((resp) => resp.data)
      .then((data) =>
        this.setState({
          title: data.title,
          by: data.by,
          language: data.language,
          audio_file: data.audio_file,
        })
      );
    scroll.scrollToTop();
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    axios
      .put(`http://localhost:3001/audibles/${id}`, this.state)
      .then((res) => res)
      .then((data) => this.props.history.push("/"))
      .catch((err) => console.log(err));
  };

  handleOnDelete = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    axios
      .delete(`http://localhost:3001/audibles/${id}`, this.state)
      .then((res) => res)
      .then((data) => this.props.history.push("/"))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <div style={{ backgroundColor: "#f2f2eb" }}>
          <div
            style={{
              margin: "35px",
              padding: "3%",
              marginLeft: "20%",
              width: "60%",
              backgroundColor: "white",
              border: "1px solid gray",
              fontFamily: "monospace",
              boxShadow: "10px 20px",
              borderRadius: "20px",
            }}
          >
            <h1 style={{ marginLeft: "35%" }}>Edit Audible</h1>
          </div>
          <Container style={{ margin: "5%", marginLeft: "380px" }}>
            <Row>
              <Col xs={12}>
                <Form onSubmit={this.handleOnSubmit}>
                  <FormGroup>
                    <FormLabel> Title: </FormLabel>
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
                  <Button type="submit"> Edit </Button>
                  <Button
                    onClick={this.handleOnDelete}
                    className="btn btn-danger ml-2"
                  >
                    {" "}
                    Delete{" "}
                  </Button>
                  <Link to="/" className="btn btn-danger ml-2">
                    Cancel
                  </Link>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default EditAudible;
