import styled from "styled-components";

import { BorderColor } from "../../styles/common.styles";

export const ContentStyle = {
  background: "#2b333d",
  color: "#919cab",
};

export const SchoolIconStyle = {
  background: "#ff4d4d",
};

export const WorkIconStyle = {
  background: "#00cc66",
};

export const ArrowStyle = {
  borderRight: "7px solid  #2b333d",
};

export const CareerContainer = styled.div`
  border-bottom: 1px solid ${BorderColor};
`;

export const HeadingContainer = styled.h3`
  font-size: 34px;
  font-family: "Roboto";
  text-align: center;
  padding: 24px 0;
`;

export const TimelineHeading = styled.h3``;

export const TimelineSubHeading = styled.h6``;

export const TimelineContent = styled.p``;

export const TimelineContentStyle = {
  textAlign: "left",
};
