import React from 'react';
import ReactGA from 'react-ga';
import About from './About';
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
      <section id="about" className="home-section">
        <About/>
      </section>
      <section id="contact" className="home-section">
        <Contact/>
      </section>
      <Footer />
    </div>
  );
}