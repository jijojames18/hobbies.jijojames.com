import React from "react";

import ContactForm from "../contact-form/contact-form";

import {
  Modal,
  ModalContent,
  CloseButton,
  CloseButtonImage,
} from "./contact-form-overlay.styles";

const ContactFormOverlay = ({ isFormOpen, handleMenuClose }) => {
  return isFormOpen ? (
    <Modal>
      <ModalContent>
        <CloseButton>
          <CloseButtonImage
            alt="Close contact form"
            onClick={handleMenuClose}
          />
        </CloseButton>
        <ContactForm></ContactForm>
      </ModalContent>
    </Modal>
  ) : (
    ""
  );
};

export default ContactFormOverlay;
