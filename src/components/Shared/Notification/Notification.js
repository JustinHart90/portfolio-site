import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';
import './Notification.scss';

export default function Notification(props) {
    const [showToast, setShowToast] = useState(props.show);

    const toggleToast = () => setShowToast(!showToast);

    return (
        <div
            className='toast-container' 
            style={{ position: 'fixed', width: 'auto', whiteSpace: 'nowrap', top: 0, right: 0 }}>
            <Toast 
                show={showToast}
                onClose={toggleToast}
                style={{
                    color: 'white',
                    backgroundColor: "black"
                }}>
                <Toast.Header>
                    <strong className="mr-auto">{props.title}</strong>
                    <small>Dismiss</small>
                </Toast.Header>
                <Toast.Body>{props.message}</Toast.Body>
            </Toast>
        </div>
    );
}