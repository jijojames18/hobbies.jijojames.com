import styled from "styled-components";

export const FlipCardContainer = styled.div`
  background-color: transparent;
  width: 128px;
  height: 128px;
  perspective: 1000px;
  &:hover {
    .flip-card-inner {
      transform: rotateY(180deg);
    }
  }
  margin: 8px;
  @media screen and (max-width: 600px) {
    width: 256px;
    height: 256px;
  }
`;

export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  background-color: #0077d9;
`;

export const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlipCardBack = styled(FlipCardFront)`
  transform: rotateY(180deg);
`;

export const FlipCardHeading = styled.h6`
  @media screen and (max-width: 600px) {
    font-size: 36px;
  }
`;
