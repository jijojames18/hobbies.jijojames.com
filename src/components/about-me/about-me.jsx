import React from "react";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import {
  AboutMeContainer,
  DetailsContainer,
  AboutMeParagraph,
  NameHeading,
  DesignationHeading,
  ContactButton,
} from "./about-me.styles";

import FooterItems from "../footer/footer-items";

const AboutMe = () => (
  <AboutMeContainer>
    <Container>
      <Row className="display-flex">
        <Col lg={7} md={5}>
          <DetailsContainer>
            <NameHeading>Jijo James</NameHeading>
            <DesignationHeading>Full Stack Developer</DesignationHeading>
            <AboutMeParagraph>
              I am an engineer having 7+ years experience in software
              development. During my period in the industry, I have had
              sufficient experience in designing, implementing, testing, and
              delivering complex web applications. I have worked on numerous
              technologies, including and not limited to JavaScript, React, Vue,
              Java. I consider myself to be a dedicated and dependable
              individual who possesses excellent technical and communication
              skills.
            </AboutMeParagraph>
          </DetailsContainer>
          <Row style={{ justifyContent: "center" }}>
            <ContactButton
              variant="outline-secondary"
              href="tel:+919567992316"
              size="md"
            >
              Ring me
            </ContactButton>
            <ContactButton
              variant="outline-secondary"
              href="mailto:jijojames18@gmail.com"
              size="md"
            >
              Send a mail
            </ContactButton>
          </Row>
          <FooterItems></FooterItems>
        </Col>
      </Row>
    </Container>
  </AboutMeContainer>
);

export default AboutMe;
