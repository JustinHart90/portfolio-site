import React from 'react';
import Popover from 'react-tiny-popover';
import { Image } from 'react-bootstrap';
import { openUrl } from '../../lib';

interface IconDesktopProps {
  id: string;
  classNames: string;
  isPopoverOpen: boolean;
  readonly src: string;
  readonly href: string;
  readonly tooltip: any;
  readonly tooltipTitle: string;

  setIsPopoverOpen(isPopoverOpen: boolean) : void;
}

export default function IconDesktop(props: IconDesktopProps) {
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