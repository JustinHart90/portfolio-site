import React, { useState } from 'react';
import ProjectDetails from './ProjectDetails';
import ImageCarousel from '../Shared/Carousel/Carousel';
import IconRow from '../Shared/IconRow/IconRow';
import Data from '../../data/projects.json';
import '../../styles/_section.scss';

export default function Projects() {
  const [activeProjectData, setActiveProjectData] = useState(Data["ProjectData"][0]);
  
  const allProjectsArray = Data["ProjectData"];
  const projectNamesArray = Data["ProjectNames"];

  return (
      <div className="section-container">
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
            shouldAnimate={false}
            isContactForm={false}
          />
      </div>
  );
}
