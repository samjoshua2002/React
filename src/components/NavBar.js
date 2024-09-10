import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 
const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Counter</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/validation">Validation</Nav.Link>
            <Nav.Link as={Link} to="/validationpractice">Validation Practice</Nav.Link>
            <Nav.Link as={Link} to="/shakeen">Shakeen</Nav.Link>
            <Nav.Link as={Link} to="/sass">Sass</Nav.Link>
            <Nav.Link as={Link} to="/redux">Redux</Nav.Link>
            <Nav.Link as={Link} to="/useeffect">API</Nav.Link>
            
           
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
