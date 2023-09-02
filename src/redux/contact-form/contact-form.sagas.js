import { takeLatest, put, all, call } from 'redux-saga/effects';
import emailjs from '@emailjs/browser';

import ContactFormTypes from './contact-form.types';
import { contactFormSubmitSuccess, contactFormSubmitFailure } from './contact-form.actions';

export function* sendContactFormRequest({ payload }) {
  try {
    yield emailjs.send(
      process.env.REACT_APP_EMAIL_SERVICE_ID,
      process.env.REACT_APP_EMAIL_TEMPLATE_ID,
      {
        name: payload.formData.name,
        email: payload.formData.email,
        message: payload.formData.comments,
        'g-recaptcha-response': payload.captcha,
      },
      process.env.REACT_APP_EMAIL_PUBLIC_KEY,
    );
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
