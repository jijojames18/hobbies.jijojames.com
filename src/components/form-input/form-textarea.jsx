import React from "react";

import {
  GroupContainer,
  FormInputTextAreaContainer,
  FormInputLabel,
} from "./form-input.styles";

const FormTextArea = ({ handleChange, label, ...props }) => (
  <GroupContainer>
    <FormInputTextAreaContainer onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel className={props.value.length ? "shrink" : ""}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormTextArea;
