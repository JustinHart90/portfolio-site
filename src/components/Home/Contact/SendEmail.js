import React from 'react';
import Axios from 'axios';

export default function SendEmail(props, event) {
    props.setLoading(true);

    const form = props.event.currentTarget;
    props.event.preventDefault();
    
    if (form.checkValidity() === false) {
        props.event.stopPropagation();
        props.setShowError(true);
        return;
    }

    props.event.preventDefault();
    props.setValidated(true);

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