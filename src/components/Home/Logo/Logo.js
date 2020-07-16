import React, { Component } from 'react';
import './Logo.css';

export class Logo extends Component {
  static displayName = Logo.name;

  render () {
    return (
      <div id="logo-container">
        <img id="logo" src="images/logo.png" alt="logo"/>
      </div>
    );
  }
}
