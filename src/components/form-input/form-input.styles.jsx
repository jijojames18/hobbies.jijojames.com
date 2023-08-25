import styled, { css } from 'styled-components';

import { transparent } from '../../styles/common.styles';

const inputStyles = css`
  border-radius: 4px;
  padding-left: 1em;
  font-size: 1em;
  font-weight: 200;
  background-color: ${transparent};
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
  margin: 1em 0;
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
