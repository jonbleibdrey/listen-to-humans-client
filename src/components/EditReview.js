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

export class EditReview extends Component {
  state = {
    title: "",
    description: "",
    rating: "",
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://localhost:3001/reviews/${id}`)
      .then((resp) => resp.data)
      .then((data) =>
        this.setState({
          title: data.title,
          description: data.description,
          rating: data.rating,
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
      .put(`http://localhost:3001/reviews/${id}`, this.state)
      .then((res) => res)
      .then((data) => this.props.history.push("/"))
      .catch((err) => console.log(err));
  };

  handleOnDelete = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    axios
      .delete(`http://localhost:3001/reviews/${id}`, this.state)
      .then((res) => res)
      .then((data) => this.props.history.push("/review"))
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
            <h1 style={{ marginLeft: "35%" }}>Edit Review</h1>
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
                    <FormLabel> description: </FormLabel>
                    <FormControl
                      type="text"
                      placeholder="description"
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
                  </FormGroup>
                  <Button type="submit"> Edit </Button>
                  <Button
                    onClick={this.handleOnDelete}
                    className="btn btn-danger ml-2"
                  >
                    {" "}
                    Delete{" "}
                  </Button>
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

export default EditReview;
