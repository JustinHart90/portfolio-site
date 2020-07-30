import React from 'react';
import { Row } from 'react-bootstrap';
import ReactGA from 'react-ga';
import About from './About';
import MyProcess from './MyProcess';
import Contact from './Contact';
import Footer from './Footer';
import MessageBlock from './MessageBlock';
import Logo from './Logo';

import './Styles/Home.scss';

export default function Home() {
  
  ReactGA.pageview(window.location.pathname); // Record a pageview for the given page
  console.log(window.location.pathname);

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
      {/* <Row id="contact" className="home-section">
        <Contact/>
      </Row> */}
      <Footer />
    </div>
  );
}