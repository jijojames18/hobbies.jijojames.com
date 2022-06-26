import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  MainHeading,
  SubHeading,
  JobContainer,
} from "./work-experience.styles";

const WorkExperience = () => {
  return (
    <Row>
      <Col lg={12} md={12} sm={12}>
        <MainHeading>WORK EXPERIENCE</MainHeading>
        <JobContainer>
          <SubHeading>FULL STACK DEVELOPER</SubHeading>
          <SubHeading>
            Financial.com | Kochi, Kerala | May 2020-Present
          </SubHeading>
        </JobContainer>
        <JobContainer>
          <SubHeading>APPLICATIONS DEVELOPER</SubHeading>
          <SubHeading>
            Oracle | Trivandrum, Kerala | June 2015-April 2020
          </SubHeading>
        </JobContainer>
      </Col>
    </Row>
  );
};

export default WorkExperience;
