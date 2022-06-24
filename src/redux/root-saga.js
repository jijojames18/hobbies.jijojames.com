import { all, call } from "redux-saga/effects";

import { contactFormSagas } from "./contact-form/contact-form.sagas";
import { blogSagas } from "./blog/blog.sagas";
import { gallerySagas } from "./gallery/gallery.sagas";
import { projectsSagas } from "./projects/projects.sagas";

export default function* rootSaga() {
  yield all([
    call(contactFormSagas),
    call(blogSagas),
    call(gallerySagas),
    call(projectsSagas),
  ]);
}
