import React, { Component } from 'react';
import ReactGA from 'react-ga';
import IconRow from '../IconRow/IconRow';

export class Education extends Component {
  static displayName = Education.name;

  render () {
    ReactGA.pageview(window.location.pathname); // Record a pageview for the given page
    console.log(`EDUCATION: ${window.location.pathname}`);

    return (
      <div>
        Education
        <IconRow shouldAnimate="false" />
      </div>
    );
  }
}
