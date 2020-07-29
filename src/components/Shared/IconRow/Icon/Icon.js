import React, { useState } from 'react';
import { isMobile } from "react-device-detect";

import IconDesktop from './IconDesktop';
import IconMobile from './IconMobile';

export default function Icon(props) {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const tooltip = `${props.tooltipTitle}: ${props.tooltip}`;

    const openUrl = (url) => {
      if (!url || !url.length) return;
      window.open(url, "_blank");
    }

    const renderIcon = () => {
      if (isMobile) {
        return (
          <IconMobile 
            {...props} 
            isPopoverOpen={isPopoverOpen}
            setIsPopoverOpen={setIsPopoverOpen}
            tooltip={tooltip}
            openUrl={openUrl}
          />
        );
      } else {
        return (
          <IconDesktop 
            {...props} 
            isPopoverOpen={isPopoverOpen}
            setIsPopoverOpen={setIsPopoverOpen}
            tooltip={tooltip}
            openUrl={openUrl}
          />
        );
      }
    }

    return renderIcon();
}