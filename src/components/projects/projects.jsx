import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProjectCardItem from "../project-card-item/project-card-item";
import ProjectsRadioButton from "../projects-radio-button/projects-radio-button";
import WorkExperience from "../../components/work-experience/work-experience";
import Spinner from "../spinner/spinner";

import { ProjectsComponent, ProjectsHeading } from "./projects.styles";

const Projects = ({ isLoading, projects }) => {
  return (
    <React.Fragment>
      <WorkExperience></WorkExperience>
      <Row>
        <Col>
          <ProjectsHeading>OTHER PROJECTS</ProjectsHeading>
        </Col>
      </Row>
      <ProjectsRadioButton />

      {isLoading ? (
        <Container>
          <Row>
            <Spinner></Spinner>
          </Row>
        </Container>
      ) : (
        <ProjectsComponent className="projects-container">
          <Container fluid>
            <Row>
              {projects.map((item) => {
                return <ProjectCardItem key={item.id} item={item} />;
              })}
            </Row>
          </Container>
        </ProjectsComponent>
      )}
    </React.Fragment>
  );
};

export default Projects;
