import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';
import './Notification.scss';

interface NotificationProps {
    show: boolean,
    title: string,
    message: string
}
export default function Notification(props: NotificationProps) {
    const [showToast, setShowToast] = useState(props.show);

    const toggleToast = () : void => setShowToast(!showToast);

    return (
        <div className='toast-container'>
            <Toast 
                show={showToast}
                onClose={toggleToast}
                style={{ color: 'white', backgroundColor: "black" }}>
                <Toast.Header>
                    <strong className="mr-auto">{props.title}</strong>
                    <small>Dismiss</small>
                </Toast.Header>
                <Toast.Body>{props.message}</Toast.Body>
            </Toast>
        </div>
    );
}