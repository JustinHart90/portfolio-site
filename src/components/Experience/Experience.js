import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import ExperienceDetails from './ExperienceDetails';
import ImageCarousel from '../Shared/Carousel/Carousel';
import IconRow from '../Shared/IconRow/IconRow';
import Data from '../../data/experience.json';
import './Experience.scss';

export function Experience() {
  const [activeCompanyData, setActiveCompanyData] = useState(Data["ExperienceData"][0]);
  
  const allJobsArray = Data["ExperienceData"];
  const companyNamesArray = Data["CompanyNames"];

  useEffect(() => {
    // Update the document title using the browser API
    ReactGA.pageview(window.location.pathname); // Record a pageview for the given page
    console.log(window.location.pathname);
  }, []);

  return (
      <div id="experience-container">
        <ExperienceDetails
          companyNames={companyNamesArray}
          activeJob={activeCompanyData}
          allJobs={allJobsArray}
          onChangeCompany={setActiveCompanyData}
        />
        {/* <ImageCarousel
          data={activeCompanyData}
        /> */}
        <IconRow 
          shouldAnimate="false" 
        />
      </div>
  );
}
