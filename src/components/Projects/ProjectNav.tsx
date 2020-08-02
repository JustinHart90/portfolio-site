import React from 'react';
import { Nav } from 'react-bootstrap';
import '../../styles/_section.scss';

interface ActiveProjectData {
    title: string;
    techStack: string;
    description: string;
    logo: string;
    githubUrl: string;
    images: Array<string>;
}

interface ProjectDetailsProps {
    projectNames: Array<string>;
    activeProject : ActiveProjectData;
    allProjects: Array<ActiveProjectData>;

    onChangeProject(activeProject: ActiveProjectData) : void;
}

export default function ProjectNav(props: ProjectDetailsProps) {
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