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
    
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`https://rails-backend-audible-api.herokuapp.com/audibles/${id}`)
      .then((resp) => resp.data)
      .then((data) =>
        this.setState({
          title: data.title,
          by: data.by,
          language: data.language
          
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
      .put(`https://rails-backend-audible-api.herokuapp.com/audibles/${id}`, this.state)
      .then((res) => res)
      .then((data) => this.props.history.push("/"))
      .catch((err) => console.log(err));
  };

  handleOnDelete = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    axios
      .delete(`https://rails-backend-audible-api.herokuapp.com/${id}`, this.state)
      .then((res) => res)
      .then((data) => this.props.history.push("/"))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <div style={{ backgroundColor: "#ebd078", padding: "3%" }}>
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
                    <FormLabel
                      style={{
                        fontFamily: "monospace",
                        fontSize: "35px",
                      }}
                    >
                      {" "}
                      Title:{" "}
                    </FormLabel>
                    <FormControl
                      type="text"
                      placeholder="Enter Title"
                      value={this.state.title}
                      onChange={this.handleOnChange}
                      name="title"
                      style={{
                        margin: "20px",
                        borderRadius: "20px",
                        width: "60%",
                      }}
                    ></FormControl>
                    <FormLabel
                      style={{
                        fontFamily: "monospace",
                        fontSize: "35px",
                      }}
                    >
                      {" "}
                      By:{" "}
                    </FormLabel>
                    <FormControl
                      type="text"
                      placeholder="Created By"
                      value={this.state.by}
                      onChange={this.handleOnChange}
                      name="by"
                      style={{
                        margin: "20px",
                        borderRadius: "20px",
                        width: "60%",
                      }}
                    ></FormControl>
                    <FormLabel
                      style={{
                        fontFamily: "monospace",
                        fontSize: "35px",
                      }}
                    >
                      {" "}
                      Language:{" "}
                    </FormLabel>
                    <FormControl
                      type="text"
                      placeholder="Language read in"
                      value={this.state.language}
                      onChange={this.handleOnChange}
                      name="language"
                      style={{
                        margin: "20px",
                        borderRadius: "20px",
                        width: "60%",
                      }}
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
