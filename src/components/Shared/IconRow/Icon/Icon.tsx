import React, { useState } from 'react';
import { isMobile } from "react-device-detect";

import IconDesktop from './IconDesktop';
import IconMobile from './IconMobile';

interface IconProps {
  id: string;
  classNames: string;
  readonly src: string;
  readonly href: string;
  readonly tooltip: JSX.Element;
  readonly tooltipTitle: string;
}

export default function Icon(props: IconProps) {
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