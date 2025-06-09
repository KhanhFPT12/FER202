import React from 'react';
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function Header() {
  return (
    <header className="header">
      <Container>
        <Navbar expand="lg" variant="dark" className="navbar">
          <Navbar.Brand href="#home">Pizza House</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-links">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Form className="search-form">
              <FormControl
                type="search"
                placeholder="Search"
                className="search-input"
                aria-label="Search"
              />
              <Button variant="danger" className="search-button">🔍</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}

export default Header;