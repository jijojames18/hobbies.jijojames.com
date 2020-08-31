import { takeLatest, put, all, call } from "redux-saga/effects";

import GalleryTypes from "./gallery.types";
import { galleryFetchSuccess, galleryFetchFailure } from "./gallery.actions";

import { fetchDocumentsFromStore } from "../../firebase/firebase.utils";

export function* galleryFetchStart(payload) {
  try {
    const data = yield call(
      fetchDocumentsFromStore,
      "gallery",
      payload.from,
      payload.limit
    );
    yield put(galleryFetchSuccess(data));
  } catch (error) {
    yield put(
      galleryFetchFailure(
        "An internal error occurred. We are looking into this."
      )
    );
  }
}

export function* onGalleryFetchStart() {
  yield takeLatest(GalleryTypes.GALLERY_FETCH_START, galleryFetchStart);
}

export function* gallerySagas() {
  yield all([call(onGalleryFetchStart)]);
}
