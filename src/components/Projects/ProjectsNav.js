import React, { Component } from 'react';
import { Card, Button, Nav } from 'react-bootstrap'
import './Projects.scss';

export default class ProjectsNav extends Component {
    render() {
        return (
            <Card>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey={`#${this.props.data["ProjectNames"][0]}`}>
                        {this.props.data["ProjectNames"].map(projectName => (
                        <Nav.Item key={`#${projectName}`}>
                            <Nav.Link href={`#${projectName}`}>
                                {projectName}
                            </Nav.Link>
                        </Nav.Item>
                        ))}
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {this.props.data["ProjectData"][0]["description"]}
                    </Card.Text>
                    <Card.Text>
                        {this.props.data["ProjectData"][0]["techStack"]}
                    </Card.Text>
                    <Button variant="primary">View GitHub</Button>
                </Card.Body>
            </Card>
        )
    }
}