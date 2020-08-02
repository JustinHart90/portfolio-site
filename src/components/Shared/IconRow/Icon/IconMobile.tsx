import React from 'react';
import Popover from 'react-tiny-popover';
import { Image } from 'react-bootstrap';
import { openUrl } from '../../lib';

interface IconMobileProps {
  id: string;
  classNames: string;
  isPopoverOpen: boolean;
  readonly src: string;
  readonly href: string;
  readonly tooltip: any;
  readonly tooltipTitle: string;
  
  setIsPopoverOpen(isPopoverOpen: boolean) : void;
}

export default function IconMobile(props: IconMobileProps) {
    return (
      <div>
        <Popover
          isOpen={props.isPopoverOpen}
          content={props.tooltip}
          onClickOutside={() => props.setIsPopoverOpen(false)}
        >
          <Image 
            id={props.id}
            src={props.src}
            className={props.classNames}
            alt='icon'
            onClick={() => openUrl(props.href)}
          />
        </Popover>
      </div>
    );
}