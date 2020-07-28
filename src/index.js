import 'bootstrap/dist/css/bootstrap.css';
import 'normalize-scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import App from './App';

const history = createBrowserHistory();
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

// Initialize google analytics page view tracking
ReactGA.initialize(process.env.REACT_APP_TRACKING_ID, {
  debug: true,
  testMode: true,
  titleCase: false
});

history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
  console.log(`GA PATH: ${location.pathname}`);
});

ReactDOM.render(  
  <BrowserRouter basename={baseUrl} history={history}>
      <App />
  </BrowserRouter>,
  rootElement
);