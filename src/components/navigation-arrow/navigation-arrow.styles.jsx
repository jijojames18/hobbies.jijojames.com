import styled from 'styled-components';

import { COMMON_HEIGHT as arrowDimension } from '../../styles/common.styles';

export const ArrowContainer = styled.div`
  height: ${arrowDimension};
  width: ${arrowDimension};
  border-radius: 50%;
  cursor: pointer;
  pointer-events: all;
`;

export const ArrowItem = styled.span`
  height: calc(100% - 10px);
  width: calc(100% - 10px);
  background-color: #ffffff;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 2.5em;
`;
