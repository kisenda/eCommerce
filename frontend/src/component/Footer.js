import React from 'react';
import { Cantainer, Row, Col, Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; 2023</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
