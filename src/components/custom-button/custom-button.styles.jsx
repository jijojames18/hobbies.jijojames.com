import styled from "styled-components";

export const CustomButtonContainer = styled.button`
  border-radius: 0px;
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 600;
  background-color: transparent;
  color: #fff;
  letter-spacing: 2px;
  border-bottom: 3px solid #fff;
  display: inline-block;
  padding: 0px 0px 3px 0px;
  transition: all 0.5s;
  border-top: none;
  border-right: none;
  border-left: none;

  &:hover {
    color: rgba(250, 250, 250, 0.5);
    border-color: rgba(250, 250, 250, 0.5);
    outline: none;
  }
`;
