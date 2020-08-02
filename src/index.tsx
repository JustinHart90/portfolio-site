import 'bootstrap/dist/css/bootstrap.css';
import 'normalize-scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const baseTags: HTMLCollectionOf<HTMLElement> = document.getElementsByTagName('base');
const baseTag: HTMLElement = baseTags[0];
const baseUrl: string = baseTag.getAttribute('href') || '';
const rootElement: HTMLElement | null = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);