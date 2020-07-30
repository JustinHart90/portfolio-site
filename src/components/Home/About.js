import React from 'react';
import { Col, Image } from 'react-bootstrap';
import './Styles/_about.scss';

export default function About() {
  return (
    <Col id="about-container" xs="12" sm="10" md="8" lg="6" xl="3">
      <div className="container">
        <Image roundedCircle id="me" src="images/me.jpeg" alt="about" />
      </div>
      
      <h2>A LITTLE BIT ABOUT ME</h2>
      <p>I’m a software engineer / web developer based in Denver, Colorado. Started as a Project Manager, then later transitioned into programming and found myself in web development.</p>
      
      <h2>SKILLS</h2>
      <p>Fullstack Developer. Meaning that I am both a frontend and backend developer. Which also means I can design and develop anything to any specification.</p>
      
      <div className="tech-stack">
        <p>Node.js | Express</p>
        <p>React | AngularJS</p>
        <p>PostgreSQL | MongoDB</p>
      </div>

      <div className="img-container">
        <Image src='/images/tech/node.png' alt="tech-image" />
        <Image src='/images/tech/express.png' alt="tech-image" />
      </div>
      <div className="img-container">
        <Image src='/images/tech/react.png' alt="tech-image" />
        <Image src='/images/tech/angular.png' alt="tech-image" />
      </div>
      <div className="img-container">
        <Image src='/images/tech/postgres.png' alt="tech-image" />
        <Image src='/images/tech/mongo.png' alt="tech-image" />
      </div>
    </Col>
  );
}
