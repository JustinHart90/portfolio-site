import React, { Component } from 'react';
import ReactGA from 'react-ga';
import ProjectsNav from './ProjectsNav';
import ImageCarousel from '../Carousel/Carousel';
import IconRow from '../IconRow/IconRow';
import './Projects.scss';

export class Projects extends Component {
  static displayName = Projects.name;
  
  render () {
    ReactGA.pageview(window.location.pathname); // Record a pageview for the given page
    console.log(`PROJECTS: ${window.location.pathname}`);
    const coin1 = 'images/projects/coin-mock.png';
    const coin2 = 'images/projects/coin-mock-2.png';
    const coin3 = 'images/projects/coin-mock-3.jpg';

    const data = {
      title: 'The Coinsight',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      images: [coin1, coin2, coin3]
    };

    return (
      <div>
        <ProjectsNav />
        <ImageCarousel data={data} />
        <IconRow shouldAnimate="false" />
      </div>
    );
  }
}
