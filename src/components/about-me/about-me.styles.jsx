import styled from "styled-components";

import MyImage from "../../assets/my-image.png";

export const AboutMeContainer = styled.div`
  background-color: #e3e3e3;
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
`;

export const NameHeading = styled.h1`
  color: #000;
`;

export const DesignationHeading = styled.h3`
  color: #000;
`;

export const MyImageContainer = styled.div`
  background-image: url(${MyImage});
  width: 360px;
  height: 360px;
  background-size: contain;
  @media screen and (max-width: 800px) {
    width: 240px;
    height: 240px;
  }
`;

export const DetailsRow = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageCol = styled.div`
  display: flex;
  justify-content: center;
`;
