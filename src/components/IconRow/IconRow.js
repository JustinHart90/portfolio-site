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
                {/* <ul class="nav-icons grid effect-8" id="grid">
                    <li><a class="right" href="resume.pdf" target="_blank" title="View Resume"><img class="icon-block" src="../../images/resume.png" alt="resume"/></a></li>
                    <li><a class="right" href="https://github.com/justinhart90" title="github.com/justinhart90" target="_blank"><img class="icon-block" src="../../images/github-raw.png" alt="github"/></a></li>
                    <li><a class="right" href="mailto:justinhart90@gmail.com" title="justinhart90@gmail.com" target="_blank"><img class="icon-block" src="../../images/mail.png" alt="email"/></a></li>
                    <li><a class="right" href="https://www.linkedin.com/in/justinhart90/" title="linkedin.com/in/justinhart90" target="_blank"><img class="icon-block" src="../../images/linkedin.png" alt="linkedin"/></a></li>
                    <li><a class="right" href="#" title="847.340.4789"><img class="icon-block" src="../../images/phone.png" alt="phone"/></a></li>
                </ul> */}
            </Container>
        );
    }
}
