import { all, call } from "redux-saga/effects";

import { contactFormSagas } from "./contact-form/contact-form.sagas";

export default function* rootSaga() {
  yield all([call(contactFormSagas)]);
}
