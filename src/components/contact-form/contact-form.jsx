import React, { useState } from "react";
import { ModalBody } from "./contact-form.styles";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import ReCAPTCHA from "react-google-recaptcha";

import FormInput from "../form-input/form-input";
import FormTextArea from "../form-input/form-textarea";
import CustomButton from "../custom-button/custom-button";

const ContactForm = () => {
  const captchaAlertMessage =
    "Please prove you are a human. Check the captcha button";
  const successfulAlertMessage =
    "Your message has been sent. We will get back to you as soon as possible.";
  const errorInSendingAlertMessage =
    "An internal error occurred. We are looking into this. In the mean time, please contact stpeterstvm.org directly.";

  const [captcha, setCaptcha] = useState("");
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

  const onCaptchaCheck = (props) => {
    setAlert({ ...alert, visible: false });
    setCaptcha(props);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const onSubmit = (event) => {};

  return (
    <ModalBody className="contact-form">
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
                  placeholder="Your name..."
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Form.Group controlId="formGroupEmail">
                <FormInput
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Your email..."
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Form.Group controlId="formGroupComments">
                <FormTextArea
                  name="comments"
                  rows="6"
                  value={comments}
                  onChange={handleChange}
                  placeholder="Your message..."
                  required
                ></FormTextArea>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="recaptcha-container">
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                onChange={onCaptchaCheck}
              />
            </Col>
          </Row>
          <Row>
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
