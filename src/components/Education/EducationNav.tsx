import React from 'react';
import { Nav } from 'react-bootstrap';
import { EducationData } from '../../interfaces/education';
import '../../styles/_section.scss';

export default function EducationNav(props: EducationData) {
    const activeSchoolName = props.activeSchool.name;

    const handleClick = (schoolName: string) => {
        let newSchoolIndex = props.schoolNames.indexOf(schoolName)
        ,   newJobData = props.allSchools[newSchoolIndex];
        return props.onChangeSchool(newJobData);
    }
    
    return (
        <Nav variant="tabs" defaultActiveKey={activeSchoolName}>
            {props.schoolNames.map(schoolName => (
            <Nav.Item key={`${schoolName}`}>
                <Nav.Link eventKey={`${schoolName}`} key={`${schoolName}`} onClick={() => handleClick(schoolName)}>
                    {schoolName}
                </Nav.Link>
            </Nav.Item>
            ))}
        </Nav>
    );
}