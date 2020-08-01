import React, { useState } from 'react';
import EducationDetails from './EducationDetails';
import IconRow from '../Shared/IconRow/IconRow';
import Data from '../../data/education.json';
import '../../styles/_section.scss';

export default function Education() {
  const [activeSchoolData, setActiveSchoolData] = useState(Data["EducationData"][0]);
  
  const allSchoolsArray = Data["EducationData"];
  const schoolNamesArray = Data["SchoolNames"];

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
