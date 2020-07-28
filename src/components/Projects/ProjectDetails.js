import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { openUrl } from '../Shared/lib';
import ProjectNav from './ProjectNav';
import '../../styles/_section.scss';

export default function ProjectDetails(props) {
    return (
        <Card>
            <Card.Header>
                <ProjectNav {...props}/>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    {props.activeProject["description"]}
                </Card.Text>
                <Card.Text>
                    {props.activeProject["techStack"]}
                </Card.Text>
                <Button variant="primary" onClick={() => openUrl(props.activeProject.githubUrl)}>View GitHub</Button>
            </Card.Body>
        </Card>
    );
}