import React, { Component } from 'react';

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
