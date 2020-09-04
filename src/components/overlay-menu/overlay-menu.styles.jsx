import styled from "styled-components";
import { OverlayBackgroundColor } from "../../styles/common.styles";

export const OverlayMenuContainer = styled.section`
  position: fixed;
  z-index: 0;
  left: 0;
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  text-align: center;
  overflow: scroll;
  transform: translateY(-100%);
  transition: all 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;

  &::-webkit-scrollbar {
    display: none;
  }

  &.open {
    background: ${OverlayBackgroundColor};
    opacity: 1;
    transform: translateY(0%);
    z-index: 100;

    div {
      transition: all 0.7s;
      transition-delay: 0.7s;
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;

export const MainMenu = styled.div`
  transform: translateY(50%);
  opacity: 0;
  transition: all 0.3s;
  transition-delay: 0s;
  width: 100%;
`;

export const Ul = styled.ul``;

export const Li = styled.li`
  padding: 24px 0px;
`;

export const Link = styled.a``;
