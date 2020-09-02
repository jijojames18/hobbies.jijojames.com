import styled, { css } from "styled-components";

export const ContainerPaddingTop = "100px";

export const ContentColor = "#232323";

export const OverlayBackgroundColor = "#0d0d0d";

export const ContainerComponent = styled.div`
  padding-top: ${ContainerPaddingTop};
  background-color: ${ContentColor};
  min-height: 100vh;
`;

export const GalleryContainerComponent = styled.div`
  background-color: ${ContentColor};
  min-height: 100vh;
`;

export const ButtonStyles = css`
  border-radius: 0px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  background-color: transparent;
  letter-spacing: 2px;
  border-bottom: 4px solid #fff;
  padding-bottom: 4px;
  text-decoration: none;
  transition: all 0.5s;
  &:hover {
    opacity: 0.5;
  }
`;
