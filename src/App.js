import React from 'react';
import { Route } from 'react-router';

import Layout from './components/Layout';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';

import './App.scss';

export default function App() {
  return (
    <Layout>
      <Route exact path='/' component={Home} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/experience' component={Experience} />
      <Route exact path='/education' component={Education} />
    </Layout>
  );
}
