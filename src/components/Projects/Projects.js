import React, { Component } from 'react';
import ReactGA from 'react-ga';
import ProjectsNav from './ProjectsNav';
import ImageCarousel from '../Carousel/Carousel';
import IconRow from '../IconRow/IconRow';
import Data from '../../data/projects.json';
import './Projects.scss';

export class Projects extends Component {
  static displayName = Projects.name;
  
  render () {
    ReactGA.pageview(window.location.pathname); // Record a pageview for the given page
    console.log(`PROJECTS: ${window.location.pathname}`);

    return (
      <div id="projects-container">
        <ProjectsNav data={Data} />
        <ImageCarousel data={Data["ProjectData"][0]} />
        <IconRow shouldAnimate="false" />
      </div>
    );
  }
}
