import styled, { css } from 'styled-components';

export const ContainerPaddingTop = '100px';

export const ContentColor = '#232323';

export const OverlayBackgroundColor = '#0d0d0d';

export const FontColor = '#fff';

export const BorderColor = '#414141';

export const COMMON_HEIGHT = '80px';

export const ContainerComponent = styled.div`
  padding-top: ${ContainerPaddingTop};
  background-color: ${ContentColor};
  min-height: 100vh;
`;

export const GalleryContainerComponent = styled.div`
  padding-top: ${COMMON_HEIGHT};
  background-color: ${ContentColor};
  min-height: 100vh;
`;

export const ButtonStyles = css`
  border-radius: 0px;
  font-size: 1em;
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
