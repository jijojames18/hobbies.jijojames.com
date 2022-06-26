import styled from "styled-components";

import { FontColor } from "../../styles/common.styles";

export const UL = styled.ul`
  color: ${FontColor};
  padding: 10px;
  @media screen and (max-width: 980px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const LI = styled.li`
  padding: 10px;
  list-style-type: disc;
  @media screen  and (max-width: 980px) {
    display: inline;
  }
}
`;
