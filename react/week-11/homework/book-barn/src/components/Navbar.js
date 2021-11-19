import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "../App.css"

function BarnNav() {
    return (
        <Navbar className="nav-bg sticky-top" expand="lg">
        <Container>
            <Navbar.Brand className="text-white" href="#home">BookBarn</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link className="text-white" href="#home">Home</Nav.Link>
                <Nav.Link className="text-white" href="#my-books">My Books</Nav.Link>
                <NavDropdown title="Browse" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">By Genre</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">By Author</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Bestsellers</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Community" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Used Books</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Forum</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Book Clubs</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Find a book..."
                        className="me-2"
                    />
                    <Button variant="warning">Search</Button>
                </Form>
                <Nav.Link className="text-white" href="#sign-in">Sign In</Nav.Link>
                <Nav.Link className="text-white" href="#join">Join</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default BarnNav;