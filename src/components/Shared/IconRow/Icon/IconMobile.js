import React from 'react';
import { Image } from 'react-bootstrap';
import Popover from 'react-tiny-popover';

export default function IconMobile(props) {
    const handleClick = () => {
        if (props.isPopoverOpen) {
            return props.openUrl(props.href);
        }

        return props.setIsPopoverOpen(!props.isPopoverOpen);
    }

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
            onClick={() => handleClick()}
          />
        </Popover>
      </div>
    );
}