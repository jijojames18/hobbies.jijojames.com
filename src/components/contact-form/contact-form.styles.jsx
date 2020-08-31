import styled from "styled-components";
import closeContactImage from "../../assets/close-contact.png";

export const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.95);
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
  margin: 0 auto;
  background-color: transparent;
`;

export const ModelHeader = styled.div`
  border-bottom: none;
`;

export const HelloHeading = styled.h3`
  color: #fff;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 64px;
  margin-top: 5%;
  border-bottom: none;
  margin-bottom: 20px;
`;

export const CloseButton = styled.div`
  position: absolute;
  z-index: 99999999;
  color: #fff;
  right: 38px;
  top: 15px;
  width: 50px;
  height: 50px;
  text-align: center;
  cursor: pointer;
`;

export const CloseButtonImage = styled.div`
  background-image: url(${closeContactImage});
  width: 50px;
  height: 50px;
`;
