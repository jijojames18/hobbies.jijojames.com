import React from "react";
import {
  Modal,
  ModalContent,
  CloseButton,
  CloseButtonImage,
} from "./contact-form-overlay.styles";
import ContactForm from "../contact-form/contact-form";

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
