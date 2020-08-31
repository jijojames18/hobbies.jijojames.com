import styled, { css } from "styled-components";

const inputStyles = css`
  border-radius: 5px;
  color: #fff;
  padding-left: 15px;
  font-size: 14px;
  font-weight: 200;
  color: #fff;
  background-color: rgba(250, 250, 250, 0.15);
  outline: none;
  border: none;
  box-shadow: none;
  line-height: 50px;
  height: 50px;
  width: 60%;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    top: -25px;
  }

  &::placeholder {
    color: #fff;
  }
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 14px 0;
`;

export const FormInputContainer = styled.input`
  ${inputStyles}
`;

export const FormInputTextAreaContainer = styled.textarea`
  ${inputStyles}
  padding-top: 10px;
  height: 165px;
  max-height: 220px;
  max-width: 100%;
`;

FormInputContainer.displayName = "FormInputContainer";

export const FormInputLabel = styled.label`
  color: #fff;
  font-size: 14px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 8px;
  top: 10px;
  transition: 300ms ease all;
  &.shrink {
    top: -25px;
  }
`;

FormInputLabel.displayName = "FormInputLabel";
