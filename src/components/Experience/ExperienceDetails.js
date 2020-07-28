import React from 'react';
import { Card } from 'react-bootstrap'
import ExperienceNav from './ExperienceNav';
import CompanyHeader from './CompanyHeader';
import '../../styles/_section.scss';

export default function ExperienceDetails(props) {
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