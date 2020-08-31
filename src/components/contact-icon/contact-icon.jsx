import React from "react";
import {
  ContactIconContainer,
  PopupIcon,
  PopupIconButton,
  ContactImage,
} from "./contact-icon.styles";

const ContactIcon = () => (
  <ContactIconContainer>
    <PopupIcon>
      <PopupIconButton>
        <ContactImage alt="Open contact form" />
      </PopupIconButton>
    </PopupIcon>
  </ContactIconContainer>
);

export default ContactIcon;
