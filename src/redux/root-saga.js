import { all, call } from "redux-saga/effects";

import { contactFormSagas } from "./contact-form/contact-form.sagas";
import { videoSagas } from "./videos/videos.sagas";
import { blogSagas } from "./blog/blog.sagas";
import { gallerySagas } from "./gallery/gallery.sagas";

export default function* rootSaga() {
  yield all([
    call(contactFormSagas),
    call(videoSagas),
    call(blogSagas),
    call(gallerySagas),
  ]);
}
