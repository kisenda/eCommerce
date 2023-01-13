import React from 'react';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
} from 'react-bootstrap';

const header = () => {
  return (
    <header>
      <Navbar bg="light" expand="md" collapseOnSelect>
        <Container fluid>
          <Navbar.Brand href="/">Salamina</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#action2">Tentang Kami</Nav.Link>
              <Nav.Link href="#action2">Tata Kelola</Nav.Link>
              <Nav.Link href="#action2">Program</Nav.Link>
              <Nav.Link href="#action2">
                <i className="fas fa-solid fa-right-to-bracket"></i>
                <span> login</span> Pengurus
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default header;
