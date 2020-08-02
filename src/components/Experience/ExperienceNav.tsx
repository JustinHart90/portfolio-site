import React from 'react';
import { Nav } from 'react-bootstrap';
import { ExperienceData } from '../../interfaces/experience';
import '../../styles/_section.scss';

export default function ExperienceNav(props: ExperienceData) {
    const activeCompanyName = props.activeJob.company;

    const handleClick = (companyName: string) => {
        let newCompanyIndex = props.companyNames.indexOf(companyName)
        ,   newJobData = props.allJobs[newCompanyIndex];
        return props.onChangeCompany(newJobData);
    }
    
    return (
        <Nav variant="tabs" defaultActiveKey={activeCompanyName}>
            {props.companyNames.map(companyName => (
            <Nav.Item key={`${companyName}`}>
                <Nav.Link eventKey={`${companyName}`} key={`${companyName}`} onClick={() => handleClick(companyName)}>
                    {companyName}
                </Nav.Link>
            </Nav.Item>
            ))}
        </Nav>
    );
}