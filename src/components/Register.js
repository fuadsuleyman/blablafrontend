import React, {Component} from 'react';
import {Form,Col,Button} from "react-bootstrap"

class Register extends Component {
    render() {
        const registerstyle={
            width:"25%",
            margin: "auto",
            height:"85vh"

        }
        return (
            <div style={registerstyle}>
                <Form>
                    <Form.Label>Registration Form</Form.Label>

                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name" />
                        </Col>
                    </Form.Row>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Check
                        type="radio"
                        label="Driver"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                    />
                    <Form.Check
                        type="radio"
                        label="Passenger"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                    />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Register;