import React from "react";
import { Form, FormGroup, FormLabel, FormControl, Button } from "react-bootstrap";

const AddAudible = () => {
  return (
    <Form>
      <FormGroup>
        <FormLabel> Title </FormLabel>
        <FormControl type="text" placeholder="enter Title"></FormControl>
      </FormGroup>
      <Button type="submit"> Submit </Button>
    </Form>
  );
};

export default AddAudible;
