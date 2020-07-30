import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Icon from './Icon/Icon';
import './IconRow.scss';

export default function IconRow(props) {
  
    const animate = props.shouldAnimate;
    const containerClass = (!animate ? 'bottom' : '');
    const classNames = (!animate ? 'icon-image' : 'icon-image animate');

    const getId = (id) => {
        return (!props.isContactForm ? id : `${id}-2`);
    }

    return (
        <Container className={containerClass}>
            <Row id={getId('icon-row')}>
                <Col xs={2} md={2}>
                    <Icon
                        id={getId('resume-image')}
                        src='images/icons/resume.png'
                        href='./resume.pdf'
                        tooltip='Click to view/download'
                        tooltipTitle="Justin's Resume"
                        classNames={classNames}
                    />
                </Col>
                <Col xs={2} md={2}>
                    <Icon 
                        id={getId('github-image' )}
                        src='images/icons/github-raw.png'
                        href='https://github.com/justinhart90'
                        tooltip='https://github.com/justinhart90'
                        tooltipTitle="GitHub"
                        classNames={classNames}
                    />
                </Col>
                <Col xs={2} md={2}>
                    <Icon
                        id={getId('email-image')}
                        src='images/icons/mail.png'
                        href='mailto:justinhart90@gmail.com'
                        tooltip='mailto:justinhart90@gmail.com'
                        tooltipTitle=""
                        classNames={classNames}
                    />
                </Col>
                <Col xs={2} md={2}>
                    <Icon
                        id={getId('linkedin-image')}
                        src='images/icons/linkedin.png'
                        href='https://www.linkedin.com/in/justinhart90/'
                        tooltip='https://www.linkedin.com/in/justinhart90/'
                        tooltipTitle="LinkedIn"
                        classNames={classNames}
                    />
                </Col>
                <Col xs={2} md={2}>
                    <Icon
                        id={getId('phone-image')}
                        src='images/icons/phone.png'
                        href=''
                        tooltip='847.340.4789'
                        tooltipTitle="Phone Number"
                        classNames={classNames}
                    />
                </Col>
            </Row>
        </Container>
    );
}
