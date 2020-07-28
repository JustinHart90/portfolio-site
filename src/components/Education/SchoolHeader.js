import React from 'react';
import { Button } from 'react-bootstrap'
import '../../styles/_section.scss';

export default function SchoolHeader(props) {
    return (
        <div className="section-header" key="education-header">
            <img
              className="section-logo"
              src={props.activeSchool.logo}
              alt="School Logo"
            />

            <Button 
                variant="primary"
                href={props.activeSchool.websiteUrl}
                target="_blank">
                View Website
            </Button>
        </div>
    );
}