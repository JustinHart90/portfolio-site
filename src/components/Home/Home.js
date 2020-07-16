import React, { Component } from 'react';
import { MessageBlock } from './MessageBlock/MessageBlock';
import { Logo } from './Logo/Logo';
import './Keyframes.css';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <Logo/>
        <MessageBlock/>
      </div>
    );
  }
}
