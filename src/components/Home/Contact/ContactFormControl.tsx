import React, { useState } from 'react';
import Spinner from '../../Shared/Spinner/Spinner';
import ContactForm from './ContactForm';

interface ContactFormControlProps {
    setShowSuccess(showSuccess: boolean) : void;
    setShowError(showError: boolean) : void;
}

export default function ContactFormControl(props: ContactFormControlProps) {
    const [loading, setLoading] = useState(false);

    const contactForm = (
        loading
        ? <Spinner loading={true} />
        : <ContactForm {...props} setLoading={setLoading} />
    );

    return contactForm;
}