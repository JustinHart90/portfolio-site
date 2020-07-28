import React from 'react';
import { Button } from 'react-bootstrap'
import '../../styles/_section.scss';
import './Experience.scss';

export default function CompanyHeader(props) {
    return (
        <div className="section-header" key="company-header">
            <img
              className="company-logo"
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