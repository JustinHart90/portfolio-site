import React from 'react';
import { Row } from 'react-bootstrap';
import About from './About';
import MyProcess from './MyProcess';
import Contact from './Contact/Contact';
import Footer from './Footer';
import MessageBlock from './MessageBlock';
import Logo from './Logo';

import './Styles/Home.scss';

export default function Home() {
  return (
    <div id="home-container">
      <section id="landing" className="home-section">
        <Logo/>
        <MessageBlock/>
      </section>
      <Row id="about" className="home-section">
        <About/>
      </Row>
      <Row id="process" className="home-section">
        <MyProcess/>
      </Row>
      <Row id="contact" className="home-section">
        <Contact/>
      </Row>
      <Footer />
    </div>
  );
}