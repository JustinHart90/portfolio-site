import React from 'react';
import { Button } from 'react-bootstrap'
import '../../styles/_section.scss';

interface SchoolData {
    readonly name: string;
    readonly longName: string;
    readonly focus: string;
    readonly showGpa: boolean;
    readonly gpa: string;
    readonly dates: string;
    readonly websiteUrl: string;
    readonly logo: string;
}

interface SchoolHeaderProps {
    readonly activeSchool: SchoolData;
}

export default function SchoolHeader(props: SchoolHeaderProps) {
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