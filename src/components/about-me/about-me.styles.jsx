import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import MyImage from "../../assets/my-image.png";
// import MyImage from "../../assets/home-bg.jpg";

// export const AboutMeContainer = styled.div`
//   position: relative;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   height: 100%;
//   width: 100%;
//   color: #fff;
//   text-align: center;
//   background-image: url(${MyImage});
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center center;
//   background-attachment: scroll;
// `;

export const AboutMeContainer = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: #fff;
  text-align: center;
  background-image: url(${MyImage});
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: 95% 50%;
  background-attachment: scroll;
`;

export const NameHeading = styled.h2`
  font-size: 34px;
  text-transform: uppercase;
`;

export const DesignationHeading = styled.h3`
  font-size: 26px;
  text-transform: uppercase;
`;

export const DetailsContainer = styled(Container)`
  position: relative;
  text-align: left;
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

export const AboutMeParagraph = styled.p`
  text-align: justify;
`;

export const ContactButton = styled(Button)`
  margin: 0px 8px;
`;
