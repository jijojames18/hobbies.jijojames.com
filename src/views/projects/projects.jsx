import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { projectsFetchStart } from "../../redux/projects/projects.actions";
import {
  selectProjectList,
  selectProjectsTotal,
  selectProjectsIsLoading,
} from "../../redux/projects/projects.selectors";
import Spinner from "../../components/spinner/spinner";

const ProjectsPage = ({ isLoading, projectsFetchStart, projects, total }) => {
  return isLoading ? <Spinner /> : "";
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
