import styled, { css } from "styled-components";

export const ContainerPaddingTop = "100px";

export const ContentColor = "#232323";

export const OverlayBackgroundColor = "#0d0d0d";

export const FontColor = "#fff";

export const BorderColor = "#414141";

export const ContainerComponent = styled.div`
  padding-top: ${ContainerPaddingTop};
  background-color: ${ContentColor};
  min-height: 100vh;
`;

export const HomeContainerComponent = styled(ContainerComponent)`
  padding-top: 80px;
`;

export const AboutContainerComponent = styled(ContainerComponent)`
  @media screen and (min-width: 600px) {
    padding-right: 60px;
    padding-left: 60px;
  }
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
  border-bottom: 4px solid ${FontColor};
  padding-bottom: 4px;
  text-decoration: none;
  transition: all 0.5s;
  &:hover {
    opacity: 0.5;
  }
`;

export const MainHeading = styled.h3``;
