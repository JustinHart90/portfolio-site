import React, { Component } from 'react';
import { Nav } from 'react-bootstrap'
import './Experience.scss';

export default class ExperienceNav extends Component {
    render() {
        const activeJobName = this.props.activeJob.title;

        const handleClick = (companyName) => {
            let newCompanyIndex = this.props.companyNames.indexOf(companyName)
            ,   newJobData = this.props.allJobs[newCompanyIndex];
            return this.props.onChangeCompany(newJobData);
        }

        return (
            <Nav variant="tabs" defaultActiveKey={activeJobName}>
                {this.props.companyNames.map(companyName => (
                <Nav.Item key={`${companyName}`}>
                    <Nav.Link eventKey={`${companyName}`} key={`${companyName}`} onClick={(e) => handleClick(companyName)}>
                        {companyName}
                    </Nav.Link>
                </Nav.Item>
                ))}
            </Nav>
        )
    }
}