import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Icon from './Icon/Icon';
import IconsData from '../../../data/icons.json';
import { getId } from '../lib';
import './IconRow.scss';

interface IconRowProps {
    shouldAnimate: boolean,
    isContactForm: boolean
}

interface IconData {
    "id": string,
    "src": string,
    "href": string,
    "tooltip": string,
    "tooltipTitle": string
}

export default function IconRow(props: IconRowProps) {
  
    const animate = props.shouldAnimate;
    const containerClass = (!animate ? 'bottom' : '');
    const classNames = (!animate ? 'icon-image' : 'icon-image animate');

    return (
        <Container className={containerClass}>
            <Row id={getId('icon-row', props.isContactForm)}>
                {IconsData.map((iconData: IconData, index: number) => (
                <Col xs={2} md={2} key={index}>
                    <Icon
                        id={getId(iconData.id, props.isContactForm)}
                        src={iconData.src}
                        href={iconData.href}
                        tooltip={<p>{iconData.tooltip}</p>}
                        tooltipTitle={iconData.tooltipTitle}
                        classNames={classNames}
                    />
                </Col>
                ))}
            </Row>
        </Container>
    );
}
