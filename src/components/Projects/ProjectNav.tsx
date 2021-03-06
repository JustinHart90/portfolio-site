import React from 'react';
import { Nav } from 'react-bootstrap';
import { ProjectDetails } from '../../interfaces/projects';
import '../../styles/_section.scss';

export default function ProjectNav(props: ProjectDetails) {
    const activeProjectName = props.activeProject.title;

    const handleClick = (projectName: string) : void => {
        let newProjectIndex = props.projectNames.indexOf(projectName)
        ,   newProjectData = props.allProjects[newProjectIndex];
        return props.onChangeProject(newProjectData);
    }

    return (
        <Nav variant="tabs" defaultActiveKey={activeProjectName}>
            {props.projectNames.map(projectName => (
            <Nav.Item key={projectName}>
                <Nav.Link eventKey={projectName} key={projectName} onClick={() => handleClick(projectName)}>
                    {projectName}
                </Nav.Link>
            </Nav.Item>
            ))}
        </Nav>
    );
}