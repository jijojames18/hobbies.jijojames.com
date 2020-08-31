import React from "react";
import {
  Modal,
  ModalContent,
  ModelHeader,
  HelloHeading,
  CloseButton,
  CloseButtonImage,
} from "./contact-form-overlay.styles";
import ContactForm from "../contact-form/contact-form";

const ContactFormOverlay = ({ isFormOpen, handleMenuClose }) => {
  return isFormOpen ? (
    <Modal>
      <ModalContent>
        <ModelHeader>
          <HelloHeading>Say hello</HelloHeading>
          <CloseButton>
            <CloseButtonImage
              alt="Close contact form"
              onClick={handleMenuClose}
            />
          </CloseButton>
        </ModelHeader>
        <ContactForm></ContactForm>
      </ModalContent>
    </Modal>
  ) : (
    ""
  );
};

export default ContactFormOverlay;
