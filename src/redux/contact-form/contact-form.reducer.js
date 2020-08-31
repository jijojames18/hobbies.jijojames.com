import ContactFormTypes from "./contact-form.types";

const INITIAL_STATE = {
  contactForm: null,
  alertMessage: null,
  alertType: null,
};

const contactFormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ContactFormTypes.CONTACT_FORM_SUBMIT_START:
      return {
        ...state,
        contactForm: action.payload,
        alertMessage: null,
        alertType: null,
      };
    case ContactFormTypes.CONTACT_FORM_SUBMIT_SUCCESS:
      return {
        ...state,
        contactForm: null,
        alertMessage:
          "Your message has been sent. We will get back to you as soon as possible.",
        alertType: "info",
      };
    case ContactFormTypes.CONTACT_FORM_SUBMIT_FAILURE:
      return {
        ...state,
        contactForm: null,
        alertMessage:
          "An internal error occurred. We are looking into this. In the mean time, please contact jijojames.com directly.",
        alertType: "danger",
      };
    default:
      return state;
  }
};

export default contactFormReducer;
