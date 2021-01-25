import React from 'react'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button

} from 'reactstrap'

const AddAudible = () => {
    return (
        <Form>
            <FormGroup>
                <Label> Title </Label>
                <Input type="text" placeholder="enter Title" ></Input>
            </FormGroup>
            <Button type="submit"> Submit </Button>

        </Form>
    )
}

export default AddAudible
