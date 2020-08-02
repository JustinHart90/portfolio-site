import React from 'react';
import { Card } from 'react-bootstrap'
import ExperienceNav from './ExperienceNav';
import CompanyHeader from './CompanyHeader';
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

interface ExperienceDetailsProps {
    companyNames: Array<string>;
    activeJob: ActiveJob;
    allJobs: Array<ActiveJob>;

    onChangeCompany(activeCompanyData: ActiveJob) : void;
}

export default function ExperienceDetails(props: ExperienceDetailsProps) {
    return (
        <Card>
            <Card.Header>
                <ExperienceNav {...props}/>
            </Card.Header>
            <Card.Body as="ul">
                <CompanyHeader activeJob={props.activeJob} />

                {props.activeJob.roles.map(roleObject => (
                    <div key={roleObject.title}>
                        <Card.Title as="h6" key={roleObject.title.length}>
                            {roleObject.title} <small>({roleObject.dates})</small>
                        </Card.Title>
                        
                        {roleObject.description.map(paragraph => (
                            <Card.Text as="li" key={paragraph.length}>
                                {paragraph}
                            </Card.Text>
                        ))}
                    </div>
                ))}
            </Card.Body>
        </Card>
    );
}