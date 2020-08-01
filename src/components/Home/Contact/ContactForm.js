import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios';

export default function ContactForm(props) {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [message, setMessage] = useState(null);

    const resetForm = () => {
        setEmail(null);
        setName(null);
        setMessage(null);
    }

    const sendEmail = async () => {
        const data = { email, name, message };

        Axios.post('https://us-central1-justin-hart.cloudfunctions.net/sendMail', data)
        .then(response => {
            if (response.status === 200 && response.data.indexOf('Error') === -1) {
                props.setShowSuccess(true);
            } else {
                props.setShowError(true);
            }

            props.setLoading(false);
            resetForm();
        })
        .catch(error => {
            props.setLoading(false);
            props.setShowError(true);
            console.log(error)
        });
    }

    const submitForm = async (e) => {
        props.setLoading(true);
        e.preventDefault();

        const form = e.currentTarget;
        
        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(false);
            props.setLoading(false);
            return;
        }

        setValidated(true);
        await sendEmail();
    }

    return (
        <Form validated={validated} onSubmit={submitForm}>
            <Form.Group controlId="form-email">
                <Form.Label>
                    Email address *
                </Form.Label>
                <Form.Control 
                    type="email"
                    placeholder="Enter email here..." 
                    value={email}
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
                    value={name}
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </Form.Group>

            <Button variant="success" type="submit">
                Submit
            </Button>
        </Form>
    );
}