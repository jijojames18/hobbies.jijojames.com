import React, { useState } from "react";
import { ModalBody } from "./contact-form.styles";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import FormInput from "../form-input/form-input";
import FormTextArea from "../form-input/form-textarea";
import CustomButton from "../custom-button/custom-button";

const ContactForm = () => {
  const [alert, setAlert] = useState({
    visible: false,
    type: "warning",
    message: "",
  });
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    comments: "",
  });

  const { name, email, comments } = userDetails;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const onSubmit = (event) => {};

  return (
    <ModalBody>
      <Col md={{ span: 6, offset: 3 }}>
        <Form onSubmit={onSubmit}>
          <Row>
            <Col md={12}>
              <h4 class="form-error">{alert.message}</h4>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Form.Group controlId="formGroupName">
                <FormInput
                  name="name"
                  type="text"
                  value={name}
                  onChange={handleChange}
                  label="Your name..."
                  required
                />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group controlId="formGroupEmail">
                <FormInput
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleChange}
                  label="Your email..."
                  required
                />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group controlId="formGroupComments">
                <FormTextArea
                  name="comments"
                  rows="6"
                  value={comments}
                  onChange={handleChange}
                  label="Your message..."
                  required
                ></FormTextArea>
              </Form.Group>
            </Col>
            <Col md={12}></Col>
            <Col md={12}>
              <Form.Group>
                <CustomButton type="submit" id="form-submit">
                  Send Message Now
                </CustomButton>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Col>
    </ModalBody>
  );
};

export default ContactForm;
