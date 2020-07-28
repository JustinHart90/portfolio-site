import React from 'react';
import { Image, OverlayTrigger } from 'react-bootstrap';
import Tooltip from './Tooltip';

export default function Icon(props) {

    const tooltip = (
      <Tooltip {...props} />
    );

    const classNames = (
        props.shouldAnimate === "false"
        ? 'icon-image'
        : 'icon-image animate'
    );

    const tooltipPlacement = (
        props.shouldAnimate === "false"
        ? 'top'
        : 'bottom'
    );
    
    return (
        <OverlayTrigger
          placement={tooltipPlacement}
          overlay={tooltip}
        >
          <Image
            id={props.id}
            src={props.src}
            className={classNames}
            onClick={() => props.handleButtonPress(props.href)}
          />
        </OverlayTrigger>
    );
}
