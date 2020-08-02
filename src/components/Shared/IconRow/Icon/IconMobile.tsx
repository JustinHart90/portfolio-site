import React from 'react';
import Popover from 'react-tiny-popover';
import { RenderIcon } from '../../../../interfaces/shared';
import { Image } from 'react-bootstrap';
import { openUrl } from '../../lib';

export default function IconMobile(props: RenderIcon) {
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