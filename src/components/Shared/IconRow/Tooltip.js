import React from 'react';
import { Popover } from 'react-bootstrap';

export default function Tooltip(props) {
    return (
        <Popover id="popover-basic">
            <Popover.Title as="h3">{props.tooltipTitle}</Popover.Title>
            <Popover.Content>
                {props.tooltip}
            </Popover.Content>
        </Popover>
    );
}
