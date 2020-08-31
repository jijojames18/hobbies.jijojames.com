import styled from "styled-components";

export const OverlayMenuContainer = styled.section`
  position: fixed;
  z-index: 0;
  left: 0;
  top: 80px;
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  text-align: center;
  overflow: scroll;
  transform: translateY(-100%);
  transition: all 0.5s;

  &::-webkit-scrollbar {
    display: none;
  }

  &.open {
    background: rgba(0, 0, 0, 0.95);
    color: #fff;
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

  &:nth-child(2) {
    transition-delay: 0s;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  margin-top: 80px;
  padding: 0px;
`;

export const Li = styled.li`
  padding: 15px 0px;
`;

export const Link = styled.a`
  font-size: 24px;
  font-weight: 300;
  color: #fff;
  text-decoration: none;
  transition: all 0.5s;

  &:hover {
    color: rgba(250, 250, 250, 0.5);
  }
`;
