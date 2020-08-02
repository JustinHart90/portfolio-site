import React from 'react';
import { Button } from 'react-bootstrap';
import { ActiveJob } from '../../interfaces/experience';

export default function CompanyHeader(props: ActiveJob) {
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