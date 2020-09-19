import styled, { css } from "styled-components";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import cameraImage from "../../assets/camera-icon.svg";
import blogImage from "../../assets/blog-icon.svg";
import readingImage from "../../assets/reading-icon.svg";
import footballImage from "../../assets/football-icon.svg";
import vlogImage from "../../assets/vlog-icon.svg";

export const MyHobbiesContainer = styled(Container)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 14px 0 24px 0;
  font-family: "Roboto";
}
`;

export const MyHobbiesHeadingCol = styled(Col)`
  text-align: center;
  padding: 24px 0;
  width: 100%;
`;

export const MyHobbiesHeading = styled.h3``;

export const MyHobbiesContentCol = styled(Col)`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FlipCardImg = css`
  width: 64px;
  height: 64px;
  background-size: cover;
`;

export const FlipCardPhotographyImg = styled.div`
  background-image: url(${cameraImage});
  ${FlipCardImg}
`;

export const FlipCardVlogImg = styled.div`
  background-image: url(${vlogImage});
  ${FlipCardImg}
`;

export const FlipCardReadingImg = styled.div`
  background-image: url(${readingImage});
  ${FlipCardImg}
`;

export const FlipCardBlogImg = styled.div`
  background-image: url(${blogImage});
  ${FlipCardImg}
`;

export const FlipCardFootballImg = styled.div`
  background-image: url(${footballImage});
  ${FlipCardImg}
`;
