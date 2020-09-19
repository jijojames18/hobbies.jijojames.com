import styled from "styled-components";
import Col from "react-bootstrap/Col";

import { BorderColor } from "../../styles/common.styles";

export const MySkillsContainer = styled.div`
  border-bottom: 1px solid ${BorderColor};
  padding-bottom: 72px;
  font-family: "Roboto";
`;

export const MySkillHeadingCol = styled(Col)`
  text-align: center;
  padding: 24px 0;
`;

export const MySkillHeading = styled.h3``;

export const WordCloudCol = styled(Col)`
  display: flex;
  justify-content: center;
  border: 2px solid ${BorderColor};
`;

export const WordCloudColors = [
  "#1f77b4",
  "#ff7f0e",
  "#2ca02c",
  "#d62728",
  "#9467bd",
];
