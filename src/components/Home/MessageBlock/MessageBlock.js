import React, { Component } from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import IconRow from '../../IconRow/IconRow';
import './MessageBlock.scss';

export class MessageBlock extends Component {
  static displayName = MessageBlock.name;

  render () {
    return (
        <div id="message-block">
            <p id="name">Justin Hart</p>
            <p id="role">Full Stack Web Developer</p>
            <IconRow />
        </div>
    );
  }
}
