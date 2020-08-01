import React, { useState } from 'react';
import ExperienceDetails from './ExperienceDetails';
// import ImageCarousel from '../Shared/Carousel/Carousel';
import IconRow from '../Shared/IconRow/IconRow';
import Data from '../../data/experience.json';
import '../../styles/_section.scss';

export default function Experience() {
  const [activeCompanyData, setActiveCompanyData] = useState(Data["ExperienceData"][0]);
  
  const allJobsArray = Data["ExperienceData"];
  const companyNamesArray = Data["CompanyNames"];

  return (
      <div className="section-container">
        <ExperienceDetails
          companyNames={companyNamesArray}
          activeJob={activeCompanyData}
          allJobs={allJobsArray}
          onChangeCompany={setActiveCompanyData}
        />
        <IconRow 
          shouldAnimate={false}
          isContactForm={false}
        />
      </div>
  );
}
