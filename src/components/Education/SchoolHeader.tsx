import React from 'react';
import { Button } from 'react-bootstrap';
import { ActiveSchool } from '../../interfaces/education';
import '../../styles/_section.scss';

export default function SchoolHeader(props: ActiveSchool) {
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