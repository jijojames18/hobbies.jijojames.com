import styled, { css } from "styled-components";

const inputStyles = css`
  border-radius: 5px;
  font-size: 14px;
  font-weight: 200;
  color: #fff;
  background-color: rgba(250, 250, 250, 0.15);
  outline: none;
  border: none;
  box-shadow: none;
  line-height: 40px;
  height: 40px;
  width: 60%;
  margin-bottom: 25px;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    top: -25px;
  }
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
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
  left: 170px;
  top: 10px;
  transition: 300ms ease all;
  &.shrink {
    top: -25px;
  }
`;

FormInputLabel.displayName = "FormInputLabel";
