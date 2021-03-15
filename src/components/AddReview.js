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
      .then((data) => this.props.history.push("/review"))
      .catch((err) => console.log(err));
  };

  componentDidMount = () => {
    axios.get("http://localhost:3001/audibles").then((resp) => {
      const audible = resp.data;
      this.setState({ audible });
    });
  };

  render() {
    return (
      <>
        <div
          id="addReview"
          style={{ backgroundColor: "#f2f2eb", padding: "50px"}}
        >
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
            <h1 className="animate__animated animate__bounceInRight">
              Add your Review
            </h1>
            <p>
              We like to hear what other people like to say. We want it to stay
              freindly so please do so. here is the add review section
            </p>
          </div>
          <Container style={{ marginBottom:"20%", marginTop:"10%" }}>
            <Row>
              <Col xs={12}>
                <Form onSubmit={this.handleOnSubmit}>
                  <FormGroup>
                    <FormLabel> audible to review: </FormLabel>
                    <Form.Control
                      as="select"
                      onChange={this.handleSelectOnChange}
                      custom
                    >
                      {this.state.audible.map((audible) => (
                        <option key={audible.id} value={audible.id}>
                          {audible.title}
                        </option>
                      ))}
                    </Form.Control>
                    <FormLabel> Title </FormLabel>
                    <FormControl
                      type="text"
                      placeholder="Enter review title"
                      value={this.state.title}
                      onChange={this.handleOnChange}
                      name="title"
                    ></FormControl>
                    <FormLabel> Description: </FormLabel>
                    <FormControl
                      as="textarea"
                      rows={5}
                      placeholder="Description"
                      value={this.state.description}
                      onChange={this.handleOnChange}
                      name="description"
                    ></FormControl>
                    <FormLabel> rating: </FormLabel>
                    <FormControl
                      type="text"
                      placeholder="rating"
                      value={this.state.rating}
                      onChange={this.handleOnChange}
                      name="rating"
                    ></FormControl>
                    <FormControl
                      className="invisible"
                      type="text"
                      placeholder="rating"
                      value={this.state.audible_id}
                      onChange={this.handleOnChange}
                      name="audible_id"
                    ></FormControl>
                  </FormGroup>
                  <Button type="submit"> Submit </Button>
                  <Link to="/review" className="btn btn-danger ml-2">
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
