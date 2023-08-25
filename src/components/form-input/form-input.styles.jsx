import styled, { css } from 'styled-components';

const inputStyles = css`
  border-radius: 4px;
  padding-left: 14px;
  font-size: 14px;
  font-weight: 200;
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
  height: 165px;
  max-height: 220px;
  max-width: 100%;
`;

FormInputContainer.displayName = 'FormInputContainer';

export const FormInputLabel = styled.label``;

FormInputLabel.displayName = 'FormInputLabel';
