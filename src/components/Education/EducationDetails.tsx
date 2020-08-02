import React from 'react';
import { Card } from 'react-bootstrap';
import { EducationData } from '../../interfaces/education';
import EducationNav from './EducationNav';
import SchoolHeader from './SchoolHeader';
import '../../styles/_section.scss';

export default function EducationDetails(props: EducationData) {
    return (
        <Card>
            <Card.Header>
                <EducationNav {...props}/>
            </Card.Header>
            <Card.Body as="ul">
                <SchoolHeader activeSchool={props.activeSchool} />

                <Card.Title as="h6" key={props.activeSchool.name}>
                    {props.activeSchool.longName} <small>({props.activeSchool.dates})</small>
                </Card.Title>

                <div key={props.activeSchool.focus}>
                    <Card.Text as="li" key={props.activeSchool.focus}>
                        {props.activeSchool.focus}
                    </Card.Text>

                    {props.activeSchool.showGpa && 
                        <Card.Text as="li" key={props.activeSchool.focus}>
                            GPA: {props.activeSchool.gpa}
                        </Card.Text>
                    }
                </div>
            </Card.Body>
        </Card>
    );
}