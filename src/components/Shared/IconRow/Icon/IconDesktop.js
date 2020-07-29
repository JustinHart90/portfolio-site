import React from 'react';
import { Image } from 'react-bootstrap';
import Popover from 'react-tiny-popover';

export default function IconDesktop(props) {
    return (
      <div>
        <Popover isOpen={props.isPopoverOpen} content={props.tooltip}>
          <Image 
            id={props.id}
            src={props.src}
            href={props.href}
            className={props.classNames}
            target='_blank'
            alt='icon'
            onMouseEnter={() => props.setIsPopoverOpen(!props.isPopoverOpen)}
            onMouseLeave={() => props.setIsPopoverOpen(!props.isPopoverOpen)}
            onClick={() => props.openUrl(props.href)}
          />
        </Popover>
      </div>
    );
}