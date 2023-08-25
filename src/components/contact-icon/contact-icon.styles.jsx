import styled from 'styled-components';
import contactImage from '../../assets/contact-icon.png';

import { commonHeight as iconDimension } from '../../styles/common.styles';

export const ContactIconContainer = styled.div``;

export const PopupIcon = styled.div`
  position: fixed;
  bottom: calc(${iconDimension} / 2);
  right: calc(${iconDimension} / 2);
  z-index: 300;
  display: inline-block;
`;

export const PopupIconButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const ContactImage = styled.div`
  background-image: url(${contactImage});
  width: 60px;
  height: 60px;
`;
