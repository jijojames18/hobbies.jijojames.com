import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { projectsFetchStart } from "../../redux/projects/projects.actions";
import {
  selectProjectsIsLoading,
  selectProjectList,
  selectProjectsTotal,
} from "../../redux/projects/projects.selectors";
import ProjectCardItem from "../../components/project-card-item/project-card-item";
import ProjectsRadioButton from "../../components/projects-radio-button/projects-radio-button";
import Spinner from "../../components/spinner/spinner";
import ViewPage from "../view";
import {
  ProjectsContainerComponent,
  ProjectsComponent,
} from "../../styles/common.styles";

const ProjectsPage = ({ isLoading, projectsFetchStart, projects, total }) => {
  useEffect(() => {
    projectsFetchStart({
      from: 0,
    });
  }, [projectsFetchStart]);

  return isLoading ? (
    <Spinner />
  ) : (
    <ProjectsContainerComponent>
      <ProjectsRadioButton />
      <ViewPage
        RenderComponent={ProjectCardItem}
        fetchStart={projectsFetchStart}
        total={total}
        items={projects}
        ContainerComponent={ProjectsComponent}
        page="projects"
      />
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
