import React, { useState } from 'react';

import ContactFormOverlay from '../contact-form-overlay/contact-form-overlay';

import { ContactIconContainer, PopupIcon, PopupIconButton, ContactImage } from './contact-icon.styles';

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
      <ContactFormOverlay isFormOpen={isFormOpen} handleMenuClose={handleMenuClose} />
    </ContactIconContainer>
  );
};

export default ContactIcon;
