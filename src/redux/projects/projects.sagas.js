import { takeLatest, put, all, call } from "redux-saga/effects";

import ProjectsTypes from "./projects.types";
import { projectsFetchSuccess, projectsFetchFailure } from "./projects.actions";
import { fetchDocumentsFromStore } from "../../firebase/firebase.utils";

export function* projectsFetchStart({ payload }) {
  try {
    const data = yield call(
      fetchDocumentsFromStore,
      "projects",
      payload.from,
      payload.limit
    );
    yield put(projectsFetchSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(
      projectsFetchFailure(
        "An internal error occurred. We are looking into this."
      )
    );
  }
}

export function* onProjectsFetchStart() {
  yield takeLatest(ProjectsTypes.PROJECTS_FETCH_START, projectsFetchStart);
}

export function* projectsSagas() {
  yield all([call(onProjectsFetchStart)]);
}
