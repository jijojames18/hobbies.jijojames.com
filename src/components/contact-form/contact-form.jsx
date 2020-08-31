import React from "react";
import {
  Modal,
  ModalContent,
  ModelHeader,
  HelloHeading,
  CloseButton,
  CloseButtonImage,
} from "./contact-form.styles";

const ContactForm = ({ isFormOpen, handleMenuClose }) => {
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
        <div id="contact-form-container"></div>
      </ModalContent>
    </Modal>
  ) : (
    ""
  );
};

export default ContactForm;
