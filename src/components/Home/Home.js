import React, { Component } from 'react';
import { IconBlock } from './IconBlock';
import { Logo } from './Logo';
import './Home.css';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div id="top-section">
        <Logo/>
        <IconBlock/>
      </div>
    );
  }
}
