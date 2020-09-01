import { takeLatest, put, all, call } from "redux-saga/effects";

import VideoTypes from "./videos.types";
import { videoFetchSuccess, videoFetchFailure } from "./videos.actions";

import { fetchDocumentsFromStore } from "../../firebase/firebase.utils";

export function* videoFetchStart({ payload }) {
  try {
    const data = yield call(
      fetchDocumentsFromStore,
      "videos",
      payload.from,
      payload.limit
    );
    yield put(videoFetchSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(
      videoFetchFailure("An internal error occurred. We are looking into this.")
    );
  }
}

export function* onVideoFetchStart() {
  yield takeLatest(VideoTypes.VIDEO_FETCH_START, videoFetchStart);
}

export function* videoSagas() {
  yield all([call(onVideoFetchStart)]);
}
