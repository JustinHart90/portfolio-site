import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import EducationDetails from './EducationDetails';
import IconRow from '../Shared/IconRow/IconRow';
import Data from '../../data/education.json';
import '../../styles/_section.scss';

export default function Education() {
  const [activeSchoolData, setActiveSchoolData] = useState(Data["EducationData"][0]);
  
  const allSchoolsArray = Data["EducationData"];
  const schoolNamesArray = Data["SchoolNames"];

  useEffect(() => {
    // Update the document title using the browser API
    ReactGA.pageview(window.location.pathname); // Record a pageview for the given page
    console.log(window.location.pathname);
  }, []);

  return (
      <div className="section-container">
        <EducationDetails
          schoolNames={schoolNamesArray}
          activeSchool={activeSchoolData}
          allSchools={allSchoolsArray}
          onChangeSchool={setActiveSchoolData}
        />
        <IconRow 
          shouldAnimate={false}
          isContactForm={false}
        />
      </div>
  );
}
