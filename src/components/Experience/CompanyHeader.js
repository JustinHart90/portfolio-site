import React from 'react';
import { Button } from 'react-bootstrap'
import { openUrl } from '../Shared/lib';
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

            {props.activeJob.showWebsiteUrl &&
                <Button 
                    variant="primary" 
                    onClick={() => openUrl(props.activeJob.websiteUrl)}>
                    View Website
                </Button>
            }
        </div>
    );
}