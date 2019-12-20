import React, {Component} from 'react';
import {Form,Col,Button} from "react-bootstrap"

class Addtrip extends Component {
    render() {
        const addtripstyle={
            width:"25%",
            margin: "auto",
            height:"85vh"

        }
        return (
            <div style={addtripstyle}>
                <Form>
                    <Form.Group controlId="formGroupFrom">
                        <Form.Label>Add Trip</Form.Label>
                        <Form.Control type="text" placeholder="From" />
                    </Form.Group>
                    <Form.Group controlId="formGroupTo">
                        <Form.Control type="text" placeholder="To" />
                    </Form.Group>
                    <Form.Group controlId="formGroupDepDate">
                        <Form.Control type="date" placeholder="Departure date" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPrice">
                        <Form.Control type="text" placeholder="Price" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" placeholder="Comment" rows="3"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Publish
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Addtrip;