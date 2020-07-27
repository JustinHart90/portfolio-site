import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { MessageBlock } from './MessageBlock/MessageBlock';
import { Logo } from './Logo/Logo';
import './Keyframes.scss';
import './Animations.scss';

export class Home extends Component {
  static displayName = Home.name;
  
  render () {
    ReactGA.pageview(window.location.pathname); // Record a pageview for the given page
    console.log(`HOME: ${window.location.pathname}`);

    return (
      <div>
        <Logo/>
        <MessageBlock/>
      </div>
    );
  }
}
