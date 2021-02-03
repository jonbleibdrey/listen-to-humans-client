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

export class AddReview extends Component {
  state = {
    title: "",
    description: "",
    rating: "",
    audible:[]
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
      .post("http://localhost:3001/reviews", {
        title: this.state.title,
        description: this.state.description,
        rating: this.state.rating,
        audible_id: this.state.audible_id,
      })
      .then((res) => console.log(res))
      .then((data) => console.log(data));
  };

  componentDidMount = () => {
    axios.get("http://localhost:3001/audibles").then((resp) => {
        const audible = resp.data;
        this.setState({audible})

    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleOnSubmit}>
          <FormGroup>
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
              type="text"
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
            <FormLabel> audible to review: </FormLabel>
            <Form.Control as="select" custom>
                {this.state.audible.map((audible) => 
                    <option key={audible.id} value={audible.id}>{audible.title}</option>
                )}
           
            </Form.Control>
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

export default AddReview;
