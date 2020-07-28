import React from 'react';
import { Card, Button } from 'react-bootstrap';
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
                <Button
                    variant="primary"
                    href={props.activeProject.githubUrl}
                    target="_blank">
                    View GitHub
                </Button>
            </Card.Body>
        </Card>
    );
}