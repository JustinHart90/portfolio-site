import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Icon from './Icon';
import '../Home/MessageBlock/MessageBlock.scss';

export default class IconRow extends Component {
  static displayName = IconRow.name;

  render () {
    return (
        <Container>
            <Row id='icon-row'>
                <Col xs={2} md={2}>
                    <Icon id='resume-image' className='icon-image' src="images/resume.png" />
                </Col>
                <Col xs={2} md={2}>
                    <Icon id='github-image' className='icon-image' src="images/github.png" />
                </Col>
                <Col xs={2} md={2}>
                    <Icon id='email-image' className='icon-image' src="images/mail.png" />
                </Col>
                <Col xs={2} md={2}>
                    <Icon id='linkedin-image' className='icon-image' src="images/linkedin.png" />
                </Col>
                <Col xs={2} md={2}>
                    <Icon id='phone-image' className='icon-image' src="images/phone.png" />
                </Col>
            </Row>
            {/* <ul class="nav-icons grid effect-8" id="grid">
                <li><a class="right" href="./resume.pdf" target="_blank" title="View Resume"><img class="icon-block" src="../../images/resume.png" alt="resume"/></a></li>
                <li><a class="right" href="https://github.com/justinhart90" title="github.com/justinhart90" target="_blank"><img class="icon-block" src="../../images/github-raw.png" alt="github"/></a></li>
                <li><a class="right" href="mailto:justinhart90@gmail.com" title="justinhart90@gmail.com" target="_blank"><img class="icon-block" src="../../images/mail.png" alt="email"/></a></li>
                <li><a class="right" href="https://www.linkedin.com/in/justinhart90/" title="linkedin.com/in/justinhart90" target="_blank"><img class="icon-block" src="../../images/linkedin.png" alt="linkedin"/></a></li>
                <li><a class="right" href="#" title="847.340.4789"><img class="icon-block" src="../../images/phone.png" alt="phone"/></a></li>
            </ul> */}
        </Container>
    );
  }
}
