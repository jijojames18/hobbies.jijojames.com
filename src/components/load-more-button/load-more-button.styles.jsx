import styled from "styled-components";

export const LoadMoreButtonContainer = styled.div`
  text-align: center;
  margin: 24px 0;
`;

export const LoadMoreLink = styled.a`
  height: 80px;
  width: 100%;
  display: inline-block;
  text-align: center;
  line-height: 80px;
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;
  background-color: #989898;
  transition: all 0.5s;
  font-weight: bold;

  &:hover {
    color: rgba(250, 250, 250, 0.5);
  }
`;
