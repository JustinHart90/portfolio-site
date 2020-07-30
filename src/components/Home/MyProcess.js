import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Styles/_process.scss';

export default function MyProcess() {
  return (
    <section>
        <Col className="process-container" md={{span: 8, offset: 2}} lg={{span: 6, offset: 3}}>      
            <h2>My Process</h2>
            <p>I work with constant communication with whomever hires me and I try to focus on exactly what they want. I make sure to always design for cross platforms, whether on mobile or desktop my websites are always functional and clean.</p>
        </Col>
        <Row id="process-details">
            <Col md="4" lg="3">
                <h2>Plan</h2>
                <p>We talk about ever thing you want on the site. You tell me your hopes and dreams for your website and we get into it so we can figure out as much detail as possible to ensure you are getting what you want. If you don't know what you want for sure you can just give the basics of what you want on your site and I will come up with designs for you.</p>
            </Col>
            <Col md="4" lg="3">
                <div className="img-container">
                    <h2>Build</h2>
                    <p>Before I begin building I will give you a time estimate until we get to the next phase, which depends on what kind of site you would like and how big it is. This is when I will start to craft the site and create the features and designs to make your site extraordinary.</p>
                </div>
            </Col>
            <Col md="4" lg="3">
                <div className="img-container">
                    <h2>Revise</h2>
                    <p>We go through a demo of the site and star to add content in and change up any design elements that don't work, or need more of. You tell me what you like or don't like and I will go back and fix it up so you have the best possible site you can have.</p>
                </div>
            </Col>
        </Row>
    </section>
  );
}
