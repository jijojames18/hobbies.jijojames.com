import React from "react";
import {
  PopupIcon,
  PopupIconButton,
  ContactImage,
} from "./contact-icon.styles";

const ContactIcon = () => (
  <PopupIcon>
    <PopupIconButton>
      <ContactImage alt="Open contact form" />
    </PopupIconButton>
  </PopupIcon>
);

export default ContactIcon;
