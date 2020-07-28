import React from 'react';
import { Card, Button } from 'react-bootstrap'
import ProjectNav from './ProjectNav';
import './Projects.scss';

export default function ProjectDetails(props) {

    const openGithub = (url) => {
        window.open(url, "_blank");
    }

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
                <Button variant="primary" onClick={() => openGithub(props.activeProject.githubUrl)}>View GitHub</Button>
            </Card.Body>
        </Card>
    );
}