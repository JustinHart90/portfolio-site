import React from 'react';
import { Nav } from 'react-bootstrap'
import '../../styles/_section.scss';

interface Role {
    title: string;
    description: Array<string>;
    dates: string;
}

interface ActiveJob {
    company: string;
    titles: Array<string>;
    websiteUrl: string;
    logo: string;
    roles: Array<Role>
}

interface ExperienceNavProps {
    companyNames: Array<string>;
    activeJob: ActiveJob;
    allJobs: Array<ActiveJob>;

    onChangeCompany(activeCompanyData: ActiveJob) : void;
}

export default function ExperienceNav(props: ExperienceNavProps) {
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