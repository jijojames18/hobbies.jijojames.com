import React from "react";
import { withRouter } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { FooterContainer, Copyright } from "./footer.styles";

import FooterItems from "./footer-items";

const Footer = (history) => {
  console.log(history);
  if (history?.location?.pathname === "/") {
    return "";
  } else {
    return (
      <FooterContainer>
        <FooterItems></FooterItems>
        <Container fluid>
          <Col md={12}>
            <Copyright>
              Copyright &copy; {new Date().getFullYear()} jijojames.com
            </Copyright>
          </Col>
        </Container>
      </FooterContainer>
    );
  }
};

export default withRouter(Footer);
