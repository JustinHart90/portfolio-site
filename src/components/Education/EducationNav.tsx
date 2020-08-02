import React from 'react';
import { Nav } from 'react-bootstrap'
import '../../styles/_section.scss';

interface SchoolData {
    readonly name: string;
    readonly longName: string;
    readonly focus: string;
    readonly showGpa: boolean;
    readonly gpa: string;
    readonly dates: string;
    readonly websiteUrl: string;
    readonly logo: string;
}

interface EducationNavProps {
    readonly schoolNames: Array<string>;
    readonly activeSchool: SchoolData;
    readonly allSchools: Array<SchoolData>;
    onChangeSchool(activeSchoolData: SchoolData) : void;
}

export default function EducationNav(props: EducationNavProps) {
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