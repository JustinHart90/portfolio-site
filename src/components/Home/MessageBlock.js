import React from 'react';
import IconRow from '../Shared/IconRow/IconRow';

export default function MessageBlock() {
  return (
      <div id="message-block">
          <p id="name">Justin Hart</p>
          <p id="role">Full Stack Web Developer</p>
          <IconRow shouldAnimate="true" />
      </div>
  );
}
