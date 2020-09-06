import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { projectsFetchStart } from "../../redux/projects/projects.actions";
import { selectProjectsIsLoading } from "../../redux/projects/projects.selectors";
import ProjectsRadioButton from "../../components/projects-radio-button/projects-radio-button";
import Spinner from "../../components/spinner/spinner";
import { ContainerComponent } from "../../styles/common.styles";

const ProjectsPage = ({ isLoading, projectsFetchStart }) => {
  useEffect(() => {
    projectsFetchStart({
      from: 0,
    });
  }, [projectsFetchStart]);

  return isLoading ? (
    <Spinner />
  ) : (
    <ContainerComponent>
      <ProjectsRadioButton></ProjectsRadioButton>
    </ContainerComponent>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectProjectsIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  projectsFetchStart: (payload) => dispatch(projectsFetchStart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);
