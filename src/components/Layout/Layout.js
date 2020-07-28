import React from 'react';
import { Container } from 'reactstrap';

import Nav from '../Nav/Nav';
import './Layout.scss';

export default function Layout(props) {
  return (
    <div id="layout-container">
      <Nav />
      <Container style={{padding: 0, margin: 0, width: "100vw", maxWidth: "100vw"}}>
        {props.children}
      </Container>
    </div>
  );
}
