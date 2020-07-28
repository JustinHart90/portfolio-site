import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Icon from './Icon';
import './IconRow.scss';

export default class IconRow extends Component {
    static displayName = IconRow.name;

    handleClick = (newPageUrl) => {
        if (!newPageUrl || !newPageUrl.length) return;

        window.open(newPageUrl, "_blank");
    }
  
    render () {
        let animate = this.props.shouldAnimate
        ,   containerClass = (animate === 'false' ? 'bottom' : '');

        return (
            <Container className={containerClass}>
                <Row id='icon-row'>
                    <Col xs={2} md={2}>
                        <Icon
                            id='resume-image'
                            src='images/icons/resume.png'
                            href='./resume.pdf'
                            tooltip='View/Download Resume'
                            tooltipTitle="Justin Hart's Resume"
                            shouldAnimate={animate}
                            handleButtonPress={this.handleClick}
                        />
                    </Col>
                    <Col xs={2} md={2}>
                        <Icon 
                            id='github-image' 
                            src='images/icons/github-raw.png'
                            href='https://github.com/justinhart90'
                            tooltip='https://github.com/justinhart90'
                            tooltipTitle="GitHub Profile"
                            shouldAnimate={animate}
                            handleButtonPress={this.handleClick}
                        />
                    </Col>
                    <Col xs={2} md={2}>
                        <Icon
                            id='email-image'
                            src='images/icons/mail.png'
                            href='mailto:justinhart90@gmail.com'
                            tooltip='mailto:justinhart90@gmail.com'
                            tooltipTitle="Email Address"
                            shouldAnimate={animate}
                            handleButtonPress={this.handleClick}
                        />
                    </Col>
                    <Col xs={2} md={2}>
                        <Icon
                            id='linkedin-image'
                            src='images/icons/linkedin.png'
                            href='https://www.linkedin.com/in/justinhart90/'
                            tooltip='https://www.linkedin.com/in/justinhart90/'
                            tooltipTitle="LinkedIn Profile"
                            shouldAnimate={animate}
                            handleButtonPress={this.handleClick}
                        />
                    </Col>
                    <Col xs={2} md={2}>
                        <Icon
                            id='phone-image'
                            src='images/icons/phone.png'
                            href=''
                            tooltip='847.340.4789'
                            tooltipTitle="Phone Number"
                            shouldAnimate={animate}
                            handleButtonPress={this.handleClick}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}
