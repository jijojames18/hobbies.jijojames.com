import styled from "styled-components";
import contactImage from "../../assets/contact-icon.png";

export const ContactIconContainer = styled.div``;

export const PopupIcon = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 300;
  display: inline-block;
  width: 60px;
  height: 60px;
`;

export const PopupIconButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
`;

export const ContactImage = styled.div`
  background-image: url(${contactImage});
  width: 60px;
  height: 60px;
`;
