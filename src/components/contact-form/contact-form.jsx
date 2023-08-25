import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ReCAPTCHA from 'react-google-recaptcha';
import Alert from 'react-bootstrap/Alert';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { ModalBody, HelloHeading } from './contact-form.styles';

import { contactFormSubmitStart } from '../../redux/contact-form/contact-form.actions';

const ContactForm = ({ formAlert, contactFormSubmitStart }) => {
  const captchaAlertMessage = 'Please prove you are a human. Check the captcha button';

  const [captcha, setCaptcha] = useState('');
  const [alert, setAlert] = useState({
    visible: false,
    type: 'warning',
    message: captchaAlertMessage,
  });
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    comments: '',
  });

  const { name, email, comments } = userDetails;

  useEffect(() => {
    if (formAlert.alertType !== null) {
      setUserDetails({
        name: '',
        email: '',
        comments: '',
      });

      setAlert({
        visible: true,
        message: formAlert.alertMessage,
        variant: formAlert.alertType,
      });
    }
  }, [formAlert]);

  const onCaptchaCheck = (props) => {
    setAlert({ ...alert, visible: false });
    setCaptcha(props);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const onSubmit = (event) => {
    if (!captcha) {
      setAlert({
        ...alert,
        visible: true,
        message: captchaAlertMessage,
        variant: 'warning',
      });
    } else {
      contactFormSubmitStart({
        formData: { ...userDetails },
        captcha,
        site: 'jijojames.com',
      });
    }
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <ModalBody className="contact-form">
      <Col md={{ span: 6, offset: 3 }}>
        <Form onSubmit={onSubmit}>
          <Row>
            <Col md={12}>
              <HelloHeading>Say hello</HelloHeading>
            </Col>
          </Row>
          {alert.visible ? (
            <Row>
              <Col md={12}>
                <Alert
                  variant={alert.variant}
                  show={alert.visible}
                  dismissible={alert.variant === 'info'}
                  onClose={() => setAlert({ ...alert, visible: false })}
                >
                  {alert.message}
                </Alert>
              </Col>
            </Row>
          ) : (
            ''
          )}
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
                <FormInput
                  type="textarea"
                  name="comments"
                  rows="6"
                  value={comments}
                  onChange={handleChange}
                  placeholder="Your message..."
                  required
                ></FormInput>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="recaptcha-container">
              <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} onChange={onCaptchaCheck} />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Form.Group>
                <CustomButton type="submit">Send Message Now</CustomButton>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Col>
    </ModalBody>
  );
};

const mapStateToProps = (state) => {
  return {
    formAlert: state.contactForm,
  };
};

const mapDispatchToProps = (dispatch) => ({
  contactFormSubmitStart: (formDetails) => dispatch(contactFormSubmitStart(formDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
