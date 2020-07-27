import React, { Component } from 'react';
import { Container } from 'reactstrap';
import TopNav from './Nav/TopNavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <TopNav />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
