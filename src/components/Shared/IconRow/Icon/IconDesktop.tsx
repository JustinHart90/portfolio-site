import React from 'react';
import Popover from 'react-tiny-popover';
import { RenderIcon } from '../../../../interfaces/shared';
import { Image } from 'react-bootstrap';
import { openUrl } from '../../lib';

export default function IconDesktop(props: RenderIcon) {
    return (
      <div>
        <Popover 
          isOpen={props.isPopoverOpen} 
          content={props.tooltip}
        >
          <Image 
            id={props.id}
            src={props.src}
            className={props.classNames}
            alt='icon'
            onMouseEnter={() => props.setIsPopoverOpen(!props.isPopoverOpen)}
            onMouseLeave={() => props.setIsPopoverOpen(!props.isPopoverOpen)}
            onClick={() => openUrl(props.href)}
          />
        </Popover>
      </div>
    );
}