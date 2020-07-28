import React, { Component } from 'react';
import { Nav } from 'react-bootstrap'
import './Projects.scss';

export default class ProjectNav extends Component {
    render() {
        const activeProjectName = this.props.activeProject.title;

        const handleClick = (projectName) => {
            let newProjectIndex = this.props.projectNames.indexOf(projectName)
            ,   newProjectData = this.props.allProjects[newProjectIndex];
            return this.props.onChangeProject(newProjectData);
        }
        return (
            <Nav variant="tabs" defaultActiveKey={activeProjectName}>
                {this.props.projectNames.map(projectName => (
                <Nav.Item key={`${projectName}`}>
                    <Nav.Link eventKey={`${projectName}`} key={`${projectName}`} onClick={(e) => handleClick(projectName)}>
                        {projectName}
                    </Nav.Link>
                </Nav.Item>
                ))}
            </Nav>
        )
    }
}