import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios';

export default function ContactForm(props) {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [message, setMessage] = useState(null);

    const sendEmail = (e) => {
        props.setLoading(true);

        const form = e.currentTarget;
        e.preventDefault();
        
        if (form.checkValidity() === false) {
            e.stopPropagation();
            props.setShowError(true);
            return;
        }

        e.preventDefault();
        setValidated(true);
        console.log(`Email Address: ${email}`);
        console.log(`Name: ${name}`);
        console.log(`Message: ${message}`);

        props.setShowSuccess(true);
        const data = { email, name, message };

        Axios.post('https://us-central1-justin-hart.cloudfunctions.net/sendMail', data)
        .then(response => {
            props.setLoading(false);
            console.log(response);
        })
        .catch(error => {
            props.setLoading(false);
            console.log(error)
        });
    }

    return (
        <Form noValidate validated={validated} onSubmit={sendEmail}>
            <Form.Group controlId="form-email">
                <Form.Label>
                    Email address *
                </Form.Label>
                <Form.Control 
                    type="email"
                    placeholder="Enter email here..." 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <Form.Text className="text-muted">
                    I will never share your email address with anyone. Ever.
                </Form.Text>
            </Form.Group>
            
            <Form.Group controlId="form-name">
                <Form.Label>
                    Name *
                </Form.Label>
                <Form.Control
                    type="name"
                    placeholder="Enter name here..."
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="form-message">
                <Form.Label>
                    Message *
                </Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows="3" 
                    placeholder="Enter message here..."
                    onChange={(e) => setMessage(e.target.value)}
                />
            </Form.Group>

            <Button variant="success" type="submit">
                Submit
            </Button>
        </Form>
    );
}