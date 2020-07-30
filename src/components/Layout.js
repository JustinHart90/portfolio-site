import React from 'react';
import { Container } from 'reactstrap';

import Nav from './Nav/Nav';
import './Layout.scss';

export default function Layout(props) {
  return (
    <div id="layout-container">
      <Nav />
      <Container id="layout-inner-container">
        {props.children}
      </Container>
    </div>
  );
}
