import React from "react";

import { withRouter } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FooterItems from "./footer-items";

import { FooterContainer, Copyright } from "./footer.styles";

const Footer = (history) => {
  if (history?.location?.pathname === "/") {
    return "";
  } else {
    return (
      <FooterContainer>
        <FooterItems></FooterItems>
        <Container fluid>
          <Row>
            <Col md={12}>
              <Copyright>
                Copyright &copy; {new Date().getFullYear()} jijojames.com
              </Copyright>
            </Col>
          </Row>
        </Container>
      </FooterContainer>
    );
  }
};

export default withRouter(Footer);
