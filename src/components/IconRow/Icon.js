import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

export default class Icon extends Component {
  static displayName = Icon.name;

  render (props) {
    return (
        <Image id={this.props.id} className={this.props.className} src={this.props.src} />
    );
  }
}
