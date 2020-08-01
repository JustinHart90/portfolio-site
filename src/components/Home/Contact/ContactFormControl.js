import React, { useState } from 'react';
import Spinner from '../../Shared/Spinner/Spinner';
import ContactForm from './ContactForm';

export default function ContactFormControl(props) {
    const [loading, setLoading] = useState(false);

    const contactForm = (
        loading
        ? <Spinner loading={true} />
        : <ContactForm {...props} setLoading={setLoading} />
    );

    return contactForm;
}