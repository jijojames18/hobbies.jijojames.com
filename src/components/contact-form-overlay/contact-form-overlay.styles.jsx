import styled from 'styled-components';
import closeContactImage from '../../assets/close-contact.png';
import { OverlayBackgroundColor } from '../../styles/common.styles';

export const Modal = styled.div`
  background-color: ${OverlayBackgroundColor};
  overflow: auto;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: all 0.6s;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ModalContent = styled.div`
  text-align: center;
  position: relative;
  top: 0;
  width: 100%;
  background-color: transparent;
`;

export const CloseButton = styled.div`
  position relative;
  float: right;
  z-index: 99999999;
  color: #fff;
  right: 38px;
  top: 15px;
  text-align: center;
  cursor: pointer;
`;

export const CloseButtonImage = styled.div`
  background-image: url(${closeContactImage});
  width: 50px;
  height: 50px;
`;
