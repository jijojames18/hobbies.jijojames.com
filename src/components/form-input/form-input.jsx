import React from "react";

import {
  GroupContainer,
  FormInputContainer,
  FormInputTextAreaContainer,
  FormInputLabel,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...props }) => (
  <GroupContainer>
    {props.type === "textarea" ? (
      <FormInputTextAreaContainer onChange={handleChange} {...props} />
    ) : (
      <FormInputContainer onChange={handleChange} {...props} />
    )}
    {label ? (
      <FormInputLabel className={props.value.length ? "shrink" : ""}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
