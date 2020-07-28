import React from 'react';
import { Card, Button } from 'react-bootstrap'
import ExperienceNav from './ExperienceNav';
import './Experience.scss';

export default function ExperienceDetails(props) {

    const openGithub = (url) => {
        window.open(url, "_blank");
    }

    return (
        <Card>
            <Card.Header>
                <ExperienceNav {...props}/>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    {props.activeJob["title"]}
                </Card.Text>
                <Card.Text>
                    {props.activeJob["techStack"]}
                </Card.Text>
                <Button variant="primary" onClick={() => openGithub(props.activeJob.githubUrl)}>View GitHub</Button>
            </Card.Body>
        </Card>
    );
}