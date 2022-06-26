import styled from "styled-components";

import { FontColor } from "../../styles/common.styles";

export const MainHeading = styled.h3`
  color: ${FontColor};
  @media screen and (max-width: 770px) {
    padding: 10px;
  }
`;

export const SubHeading = styled.p`
  color: ${FontColor};
  margin-bottom: 0px;
`;

export const JobContainer = styled.div`
  border-bottom: 1px solid #414141;
  padding: 14px 0;
  @media screen and (max-width: 770px) {
    padding-left: 20px;
  }
`;
