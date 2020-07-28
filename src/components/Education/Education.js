import React from 'react';
import ReactGA from 'react-ga';
import IconRow from '../Shared/IconRow/IconRow';

export default function Education() {
  ReactGA.pageview(window.location.pathname); // Record a pageview for the given page
  console.log(`EDUCATION: ${window.location.pathname}`);

  return (
    <div>
      Education
      <IconRow shouldAnimate="false" />
    </div>
  );
}
