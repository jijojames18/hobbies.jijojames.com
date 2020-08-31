import React, { useState } from "react";
import {
  ContactIconContainer,
  PopupIcon,
  PopupIconButton,
  ContactImage,
} from "./contact-icon.styles";
import ContactForm from "../contact-form/contact-form";

const ContactIcon = () => {
  const [isFormOpen, setFormOpen] = useState(false);

  const handleContactIconClick = () => {
    setFormOpen(!isFormOpen);
  };

  const handleMenuClose = () => {
    setFormOpen(false);
  };

  return (
    <ContactIconContainer>
      <PopupIcon onClick={handleContactIconClick}>
        <PopupIconButton>
          <ContactImage alt="Open contact form" />
        </PopupIconButton>
      </PopupIcon>
      <ContactForm isFormOpen={isFormOpen} handleMenuClose={handleMenuClose} />
    </ContactIconContainer>
  );
};

export default ContactIcon;
