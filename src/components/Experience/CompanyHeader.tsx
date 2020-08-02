import React from 'react';
import { Button } from 'react-bootstrap'

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

interface CompanyHeaderProps {
    activeJob: ActiveJob;
}

export default function CompanyHeader(props: CompanyHeaderProps) {
    return (
        <div className="section-header" key="company-header">
            <img
              className="section-logo"
              src={props.activeJob.logo}
              alt="Company Logo"
            />

            <Button 
                variant="primary"
                href={props.activeJob.websiteUrl}
                target="_blank">
                View Website
            </Button>
        </div>
    );
}