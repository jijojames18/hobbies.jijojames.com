import styled from "styled-components";

export const LoadMoreButtonContainer = styled.div`
  text-align: center;
`;

export const LoadMoreLink = styled.a`
  height: 80px;
  width: 100%;
  display: inline-block;
  text-align: center;
  line-height: 80px;
  font-size: 15px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  color: #fff;
  background-color: #989898;
  transition: all 0.5s;

  &:hover {
    color: rgba(250, 250, 250, 0.5);
    text-decoration: none;
  }
`;
