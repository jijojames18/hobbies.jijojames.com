import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { projectsFetchStart } from "../../redux/projects/projects.actions";
import {
  selectProjectsIsLoading,
  selectProjectList,
  selectProjectsTotal,
} from "../../redux/projects/projects.selectors";

import KeySkills from "../../components/key-skills/key-skills";
import { ProjectsContainerComponent } from "../../styles/common.styles";
import Projects from "../../components/projects/projects";

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
          <KeySkills></KeySkills>
        </Col>
        <Col lg={10} md={12} sm={12}>
          <Projects isLoading={isLoading} projects={projects} />
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
