

import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Form, FormControl, Button } from 'react-bootstrap';

const AlternateHeader = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#all-photos">All photos</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#exterior">Exterior</Nav.Link>
          <Nav.Link href="#interior">Interior</Nav.Link>
          <Nav.Link href="#mechanical">Mechanical</Nav.Link>
          <Nav.Link href="#docs">Docs</Nav.Link>
          <Nav.Link href="#other">Other</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          {/* <Button variant="outline-success">Search</Button> */}
        </Form>
      </Container>
    </Navbar>
  );
};

export default AlternateHeader;


