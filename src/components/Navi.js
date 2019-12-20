import React, {Component} from 'react';
import {Navbar,Nav,Form,FormControl,Button} from "react-bootstrap"
import {Link} from "react-router-dom"

class Navi extends Component {
    render() {
        return (
            <div>
                <Navbar bg="info" expand="lg">
                    <Link to="/home">
                    <Navbar.Brand href="#home">Let's Go</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/about">
                                <Nav.Link href="#about">About Us</Nav.Link>
                            </Link>
                            <Link to="/contact">
                                <Nav.Link href="#link">Contact</Nav.Link>
                            </Link>
                        </Nav>
                        <Nav className="ml-auto">
                            <Link to="/addtrip">
                                <Nav.Link href="#link">Add Trip</Nav.Link>
                            </Link>
                            <Link to="/login">
                            <Nav.Link href="#home">Login</Nav.Link>
                            </Link>
                            <Link to="/register">
                            <Nav.Link href="#link">Register</Nav.Link>
                            </Link>
                            <Link to="/home">
                                <Nav.Link href="#link">Search Trip</Nav.Link>
                            </Link>
                        </Nav>
                        {/*<Form inline>*/}
                        {/*    <FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}
                        {/*    <Button variant="outline-success">Search</Button>*/}
                        {/*</Form>*/}
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navi;