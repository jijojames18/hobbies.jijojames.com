import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import MyImage from "../../assets/my-image.png";
import { BorderColor } from "../../styles/common.styles";

export const AboutMeContainer = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-bottom: 1px solid ${BorderColor};
}
`;

export const HeadingContainer = styled(Container)`
  padding-top: 8vh;
  font-family: "Roboto";
`;

export const NameHeading = styled.h1`
  font-size: 54px;
`;

export const DesignationHeading = styled.h3`
  font-size: 34px;
`;

export const DetailsContainer = styled(Container)`
  padding-top: 10vh;
  @media screen and (max-width: 800px) {
    padding-top: 0vh;
    margin-bottom: 14px;
  }
`;

export const DetailsRow = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const DetailsCol = styled(Col)`
  text-align: left;
  padding-left: 24px;
  text-align: justify;
`;

export const ImageCol = styled.div`
  display: flex;
  justify-content: center;
`;

export const MyImageContainer = styled.div`
  background-image: url(${MyImage});
  width: 360px;
  height: 360px;
  background-size: contain;
  @media screen and (max-width: 300px) {
    width: 220px;
    height: 220px;
    margin-bottom: 8px;
  }
`;

export const AboutMeHeading = styled.h3``;

export const AboutMeParagraph = styled.p``;

export const ContactButton = styled(Button)`
  margin: 0px 8px;
`;
