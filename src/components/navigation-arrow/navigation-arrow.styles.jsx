import styled from 'styled-components';

export const ArrowContainer = styled.div`
  height: 70px;
  width: 70px;
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
  font-size: 36px;
`;
