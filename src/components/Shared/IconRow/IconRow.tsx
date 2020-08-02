import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { IconData, IconRow as IconRowProps } from '../../../interfaces/shared';
import Icon from './Icon/Icon';
import Data from '../../../data/icons.json';
import { getId } from '../lib';
import './IconRow.scss';

export default function IconRow(props: IconRowProps) {
  
    const animate = props.shouldAnimate;
    const containerClass = (!animate ? 'bottom' : '');
    const classNames = (!animate ? 'icon-image' : 'icon-image animate');

    return (
        <Container className={containerClass}>
            <Row id={getId('icon-row', props.isContactForm)}>
                {Data.map((iconData: IconData, index: number) => (
                <Col xs={2} md={2} key={index}>
                    <Icon
                        id={getId(iconData.id, props.isContactForm)}
                        src={iconData.src}
                        href={iconData.href}
                        tooltip={<p>{iconData.tooltip}</p>}
                        classNames={classNames}
                    />
                </Col>
                ))}
            </Row>
        </Container>
    );
}
