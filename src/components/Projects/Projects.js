import React, { Component } from 'react';
import ReactGA from 'react-ga';
import IconRow from '../IconRow/IconRow';

export class Projects extends Component {
  static displayName = Projects.name;

  render () {
    ReactGA.pageview(window.location.pathname); // Record a pageview for the given page
    console.log(`PROJECTS: ${window.location.pathname}`);

    return (
      <div>
        Projects
        <IconRow />
      </div>
    );
  }
}
