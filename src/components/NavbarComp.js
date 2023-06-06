import React, { Component } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Form,FormControl,Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

export default class NavbarComp extends Component {
  render() {
    return (
        <Router>
        <div>
        <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">cars&bids</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
                <NavDropdown title="Auctions" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action1">Live Auctions</NavDropdown.Item>
                <NavDropdown.Item href="#action2">
                  Past Results
                </NavDropdown.Item>
                <NavDropdown.Divider />
                </NavDropdown>
              <Nav.Link href="#action3" >Sell a Car</Nav.Link>
              <Nav.Link href="#action4">What's Cars & Bids?</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              {/* <Button variant="outline-success">Search</Button> */}
            </Form>
            <Nav.Link href="#action5">Sign Up</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
      </Router>
    );
  }
}

