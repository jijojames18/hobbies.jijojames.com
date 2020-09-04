import ContactFormTypes from "./contact-form.types";

export const contactFormSubmitStart = (userForm) => ({
  type: ContactFormTypes.CONTACT_FORM_SUBMIT_START,
  payload: userForm,
});

export const contactFormSubmitSuccess = () => ({
  type: ContactFormTypes.CONTACT_FORM_SUBMIT_SUCCESS,
});

export const contactFormSubmitFailure = () => ({
  type: ContactFormTypes.CONTACT_FORM_SUBMIT_FAILURE,
});
