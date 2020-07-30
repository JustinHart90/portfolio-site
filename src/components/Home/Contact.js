import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import ContactForm from './ContactForm';
import IconRow from '../Shared/IconRow/IconRow';
import Notification from '../Shared/Notification/Notification';

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  return (
    <>
      <Notification
          title="Email sent!"
          message="You can expect a response within 24-48 hours."
          show={true}
      />
      <Notification
          title="Email failed to send!"
          message="Please check your connection and try again."
          show={showError}
      />

      <Col id="contact-container" xs="12" sm="10" md="8" lg="6">
        <h2>Contact Me</h2>
        <p>
          If you have a project that you want to start, want help with, or just want to say hello, 
          please message me below:
        </p>
        <ContactForm 
          setShowSuccess={setShowSuccess}
          setShowError={setShowError}
        />
        <IconRow 
          shouldAnimate={false}
          isContactForm={true}
        />
      </Col>
    </>
  );
}
