import ProjectsTypes from "./projects.types";

const PROJECT_FETCH_LIMIT = 50;

export const projectsFetchStart = (payload) => ({
  type: ProjectsTypes.PROJECTS_FETCH_START,
  payload: { ...payload, limit: PROJECT_FETCH_LIMIT },
});

export const projectsFetchSuccess = (payload) => ({
  type: ProjectsTypes.PROJECTS_FETCH_SUCCESS,
  payload,
});

export const projectsFetchFailure = (payload) => ({
  type: ProjectsTypes.PROJECTS_FETCH_FAILURE,
  payload,
});
