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
    audible_id: "",
    audible:[]
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
    })
  }
 
  handleOnSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/reviews",this.state)
      .then((res) => console.log(res))
      .then((data) => this.props.history.push("/review"))
      .catch((err) => console.log(err));
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
          <h1>Add your Review</h1>
        <Form onSubmit={this.handleOnSubmit}>
          <FormGroup>
            <FormLabel> audible to review: </FormLabel>
            <Form.Control as="select" onChange={this.handleSelectOnChange} custom>
                {this.state.audible.map((audible) => 
                    <option key={audible.id} value={audible.id}>{audible.title}</option>
                )}
           
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
      </div>
    );
  }
}

export default AddReview;
