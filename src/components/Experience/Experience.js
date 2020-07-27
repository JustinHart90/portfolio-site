import React, { Component } from 'react';
import ReactGA from 'react-ga';
import IconRow from '../IconRow/IconRow';

export class Experience extends Component {
  static displayName = Experience.name;

  render () {
    ReactGA.pageview(window.location.pathname); // Record a pageview for the given page
    console.log(`EXPERIENCE: ${window.location.pathname}`);

    return (
      <div>
        Experience
        <IconRow shouldAnimate="false" />
      </div>
    );
  }
}
