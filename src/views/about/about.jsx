import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { projectsFetchStart } from "../../redux/projects/projects.actions";
import {
  selectProjectsIsLoading,
  selectProjectList,
  selectProjectsTotal,
} from "../../redux/projects/projects.selectors";
import ProjectCardItem from "../../components/project-card-item/project-card-item";
import ProjectsRadioButton from "../../components/projects-radio-button/projects-radio-button";
import WorkExperience from "../../components/work-experience/work-experience";
import Spinner from "../../components/spinner/spinner";

import {
  ProjectsContainerComponent,
  ProjectsComponent,
} from "../../styles/common.styles";

const ProjectsPage = ({ isLoading, projectsFetchStart, projects }) => {
  useEffect(() => {
    projectsFetchStart({
      from: 0,
    });
  }, [projectsFetchStart]);

  return (
    <ProjectsContainerComponent>
      <Row>
        <Col lg={2} md={12} sm={12}>
          <WorkExperience></WorkExperience>
        </Col>
        <Col lg={10} md={12} sm={12}>
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
        </Col>
      </Row>
    </ProjectsContainerComponent>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectProjectsIsLoading,
  projects: selectProjectList,
  total: selectProjectsTotal,
});

const mapDispatchToProps = (dispatch) => ({
  projectsFetchStart: (payload) => dispatch(projectsFetchStart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);
