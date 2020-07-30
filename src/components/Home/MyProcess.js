import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaLightbulb, FaHammer, FaEdit } from 'react-icons/fa';
import './Styles/_process.scss';

export default function MyProcess() {
  return (
    <section>
        <Col className="process-container" sm={12} md={{span: 8, offset: 2}} lg={{span: 6, offset: 3}}>      
            <h2>My Process</h2>
            <p>
                I work with constant communication with whomever hires me and I try to focus on 
                exactly what they want. I make sure to always design for cross platform applications.
                Whether on mobile or desktop, my web applications are always functional and clean.
            </p>
        </Col>
        <Row id="process-details">
            <Col md="4" lg="3">
                <h2>Plan</h2>
                <FaLightbulb size={"2em"}/>
                <p>
                    First, we talk about everything you want. You tell me your hopes and dreams for 
                    the application or website, and we sort it out in as much detail as possible.
                    Next, we identify which aspects are nice to have instead of absolutely necessary.
                    If you don't know what you want exactly, you can just tell me the basics, and I 
                    will come up with designs for you.
                </p>
            </Col>
            <Col md="4" lg="3">
                <div className="img-container">
                    <h2>Build</h2>
                    <FaHammer size={"2em"}/>
                    <p>
                        Before I begin building I will give you a time estimate until we get to the 
                        next phase, which depends on what kind of site you would like and how big it is.
                        This is when I will start to craft the site and create the features and designs 
                        to make your site extraordinary.
                    </p>
                </div>
            </Col>
            <Col md="4" lg="3">
                <div className="img-container">
                    <h2>Revise</h2>
                    <FaEdit size={"2em"}/>
                    <p>
                        We review together via periodically scheduled demos and start to add content 
                        in and change up any design elements that don't work. You tell me what you 
                        like or don't like and I will go back and fix prior to the next scheduled demo.
                    </p>
                </div>
            </Col>
        </Row>
    </section>
  );
}
