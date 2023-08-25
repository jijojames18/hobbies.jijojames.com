import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';

import ContactFormTypes from './contact-form.types';
import { contactFormSubmitSuccess, contactFormSubmitFailure } from './contact-form.actions';

export function* sendContactFormRequest({ payload }) {
  try {
    yield axios.post(process.env.REACT_APP_POST_FEEDBACK_ENDPOINT, JSON.stringify(payload), {
      headers: {
        'content-type': 'application/json',
      },
    });
    yield put(contactFormSubmitSuccess());
  } catch (error) {
    yield put(contactFormSubmitFailure());
  }
}

export function* onContactFormSubmitStart() {
  yield takeLatest(ContactFormTypes.CONTACT_FORM_SUBMIT_START, sendContactFormRequest);
}

export function* contactFormSagas() {
  yield all([call(onContactFormSubmitStart)]);
}
