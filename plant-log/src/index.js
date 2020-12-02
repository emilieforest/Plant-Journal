import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';


const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <BrowserRouter>
  <Auth0Provider
  domain={domain}
  clientId={clientId}
  redirectUri={window.location.origin}>
      <Router>
        <App />
      </Router>
  </Auth0Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
