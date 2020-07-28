import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import ProjectDetails from './ProjectDetails';
import ImageCarousel from '../Shared/Carousel/Carousel';
import IconRow from '../Shared/IconRow/IconRow';
import Data from '../../data/projects.json';
import './Projects.scss';

export function Projects() {
  const [activeProjectData, setActiveProjectData] = useState(Data["ProjectData"][0]);
  
  const allProjectsArray = Data["ProjectData"];
  const projectNamesArray = Data["ProjectNames"];

  useEffect(() => {
    // Update the document title using the browser API
    ReactGA.pageview(window.location.pathname); // Record a pageview for the given page
    console.log(window.location.pathname);
  }, []);
  
  return (
      <div id="projects-container">
        <ProjectDetails
          projectNames={projectNamesArray}
          activeProject={activeProjectData}
          allProjects={allProjectsArray}
          onChangeProject={setActiveProjectData}
        />
        <ImageCarousel
          data={activeProjectData}
        />
        <IconRow 
          shouldAnimate="false" 
        />
      </div>
  );
}
