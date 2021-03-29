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

export class AddReview extends Component {
  state = {
    title: "",
    description: "",
    rating: "",
    audible_id: "",
    audible: [],
    errors: [],
  };

  componentDidMount = () => {
    axios.get("http://localhost:3001/audibles").then((resp) => {
      const audible = resp.data;
      this.setState({ audible });
    });
  };

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSelectOnChange = (e) => {
    this.setState({
      audible_id: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/reviews", this.state)
      .then((res) => console.log(res))
      .then((data) => window.location.replace("http://localhost:3000"))
      .catch((err) => this.handleError(err.response.data));
  };

  handleError = (error) => {
    const err = Object.values(error);
    console.log(error);
    this.setState({ errors: err });
  };

  render() {
    return (
      <>
        <div
          id="addReview"
          style={{ backgroundColor: "#ebd078", padding: "40px" }}
        >
          <div
            style={{
              padding: "3%",
              marginLeft: "20%",
              width: "60%",
              backgroundColor: "white",
              fontFamily: "monospace",
              boxShadow: "10px 20px",
              borderRadius: "20px",
            }}
          >
            <h1>Add your Review</h1>
            <hr />
            <p>
              We like to hear what other people like to say about each book. We
              want it to stay friendly, so please do so. Leave your review below
            </p>
          </div>
          <Container
            style={{ marginBottom: "15%", marginTop: "5%", marginLeft: "28%" }}
          >
            <Row>
              <Col xs={12}>
                <Form onSubmit={this.handleOnSubmit}>
                  <FormGroup>
                    <FormLabel
                      style={{
                        padding: "2%",
                        marginLeft: "2%",
                        width: "60%",
                        backgroundColor: "white",
                        border: "1px solid gray",
                        fontFamily: "monospace",
                        boxShadow: "5px 10px",
                        borderRadius: "20px",
                        fontSize: "35px",
                      }}
                    >
                      {" "}
                      select audible to review:
                    </FormLabel>
                    <br />
                    <Form.Control
                      as="select"
                      onChange={this.handleSelectOnChange}
                      custom
                      style={{
                        margin: "25px",
                        marginBottom: "1%",
                        borderRadius: "20px",
                        width: "60%",
                      }}
                    >
                      <option disabled selected>
                        Please select value
                      </option>
                      {this.state.audible.map((audible) => (
                        <option key={audible.id} value={audible.id}>
                          {audible.title}
                        </option>
                      ))}
                    </Form.Control>

                    <FormControl
                      type="text"
                      placeholder="Enter your review title"
                      value={this.state.title}
                      onChange={this.handleOnChange}
                      name="title"
                      style={{
                        margin: "20px",
                        borderRadius: "20px",
                        width: "60%",
                      }}
                    ></FormControl>

                    <FormControl
                      as="textarea"
                      rows={5}
                      placeholder="Description"
                      value={this.state.description}
                      onChange={this.handleOnChange}
                      name="description"
                      style={{
                        margin: "20px",
                        borderRadius: "20px",
                        width: "60%",
                      }}
                    ></FormControl>
                      

                    <FormControl
                      type="text"
                      placeholder="rating"
                      value={this.state.rating}
                      onChange={this.handleOnChange}
                      name="rating"
                      style={{
                        margin: "20px",
                        borderRadius: "20px",
                        width: "60%",
                      }}
                    ></FormControl>

                    <FormControl
                      className="invisible"
                      type="text"
                      value={this.state.audible_id}
                      onChange={this.handleOnChange}
                      name="audible_id"
                    ></FormControl>
                  </FormGroup>
                  <div id="error" style={{ color: "red" }}>
                    {this.state.errors.map((e) => (
                      <ul>
                        <li>{e}</li>
                      </ul>
                    ))}
                  </div>

                  <Button
                    type="submit"
                    style={{
                      boxShadow: "10px 10px black",
                      borderRadius: "20px",
                    }}
                  >
                    Submit
                  </Button>
                  <Link
                    to="/review"
                    className="btn btn-danger ml-2"
                    style={{
                      boxShadow: "10px 10px black",
                      borderRadius: "20px",
                    }}
                  >
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

export default AddReview;
