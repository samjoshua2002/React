import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Counter</Navbar.Brand>
       
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/validation">Validation</Nav.Link>
          <Nav.Link as={Link} to="/validationpractice">Validation Practice</Nav.Link>
          <Nav.Link as={Link} to="/shakeen">Shakeen</Nav.Link>
          <Nav.Link as={Link} to="/sass">Sass</Nav.Link>
          <Nav.Link as={Link} to="/redux">Redux</Nav.Link>
          <Nav.Link as={Link} to="/useeffect">API</Nav.Link>
          <Nav.Link as={Link} to="/demo">Practice</Nav.Link>
          <Nav.Link as={Link} to="/demo2">Practice 2</Nav.Link>
          <Nav.Link as={Link} to="/own">Practice 3</Nav.Link>
          <Nav.Link as={Link} to="/useref">useref and usememo</Nav.Link>
          <Nav.Link as={Link} to="/MU">Material UI</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
