import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { IconDetails } from '../../../../interfaces/shared';
import IconDesktop from './IconDesktop';
import IconMobile from './IconMobile';

export default function Icon(props: IconDetails) {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const renderIcon = () => {
      if (isMobile) {
        return (
          <IconMobile 
            {...props} 
            isPopoverOpen={isPopoverOpen}
            setIsPopoverOpen={setIsPopoverOpen}
          />
        );
      } else {
        return (
          <IconDesktop 
            {...props} 
            isPopoverOpen={isPopoverOpen}
            setIsPopoverOpen={setIsPopoverOpen}
          />
        );
      }
    }

    return renderIcon();
}