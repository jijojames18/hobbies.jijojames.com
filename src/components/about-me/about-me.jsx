import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import {
  AboutMeContainer,
  NameHeading,
  DesignationHeading,
  MyImageContainer,
  DetailsRow,
  ImageCol,
} from "./about-me.styles";

const AboutMe = () => (
  <AboutMeContainer>
    <Container>
      <NameHeading>Jijo James K</NameHeading>
      <DesignationHeading>Full Stack Developer</DesignationHeading>
    </Container>
    <Container>
      <DetailsRow>
        <ImageCol>
          <MyImageContainer />
        </ImageCol>
        <Col>
          Software engineer with 5+years of experience in designing,
          implementing, testing, and delivering complex web applications using a
          variety of programming languages and technologies.
        </Col>
      </DetailsRow>
    </Container>
  </AboutMeContainer>
);

export default AboutMe;
