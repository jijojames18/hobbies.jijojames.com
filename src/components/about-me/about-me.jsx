import React from "react";
import Row from "react-bootstrap/Row";

import {
  AboutMeContainer,
  HeadingContainer,
  NameHeading,
  DesignationHeading,
  DetailsContainer,
  DetailsRow,
  DetailsCol,
  ImageCol,
  MyImageContainer,
  AboutMeHeading,
  AboutMeParagraph,
  ContactButton,
} from "./about-me.styles";

const AboutMe = () => (
  <AboutMeContainer>
    <HeadingContainer>
      <NameHeading>JIJO JAMES K</NameHeading>
      <DesignationHeading>FULL STACK DEVELOPER</DesignationHeading>
    </HeadingContainer>
    <DetailsContainer>
      <DetailsRow>
        <ImageCol>
          <MyImageContainer />
        </ImageCol>
        <DetailsCol>
          <AboutMeHeading>About Me</AboutMeHeading>
          <AboutMeParagraph>
            Hi, <br /> <br />I am an engineer having 5+ years experience in
            software development. During my period in the industry, I have had
            sufficient experience in designing, implementing, testing, and
            delivering complex web applications. I have worked on numerous
            technologies, including and not limited to JavaScript, React, Vue,
            Java. I consider myself to be a dedicated and dependable individual
            who possesses excellent technical and communication skills.
          </AboutMeParagraph>
          <Row>
            <ContactButton variant="primary" href="tel:+919567992316" size="lg">
              Ring me
            </ContactButton>
            <ContactButton
              variant="primary"
              href="mailto:jijojames18@gmail.com"
              size="lg"
            >
              Send a mail
            </ContactButton>
          </Row>
        </DetailsCol>
      </DetailsRow>
    </DetailsContainer>
  </AboutMeContainer>
);

export default AboutMe;
