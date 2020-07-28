import React from 'react';
import { Nav } from 'react-bootstrap'
import '../../styles/_section.scss';

export default function ExperienceNav(props) {
    const activeCompanyName = props.activeJob.company;

    const handleClick = (companyName) => {
        let newCompanyIndex = props.companyNames.indexOf(companyName)
        ,   newJobData = props.allJobs[newCompanyIndex];
        return props.onChangeCompany(newJobData);
    }
    
    return (
        <Nav variant="tabs" defaultActiveKey={activeCompanyName}>
            {props.companyNames.map(companyName => (
            <Nav.Item key={`${companyName}`}>
                <Nav.Link eventKey={`${companyName}`} key={`${companyName}`} onClick={(e) => handleClick(companyName)}>
                    {companyName}
                </Nav.Link>
            </Nav.Item>
            ))}
        </Nav>
    );
}