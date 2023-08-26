import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FooterItems from './footer-items';

import { FooterContainer, Copyright } from './footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterItems></FooterItems>
      <Container fluid>
        <Row>
          <Col md={12}>
            <Copyright>Copyright &copy; {new Date().getFullYear()} jijojames.com</Copyright>
          </Col>
        </Row>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
