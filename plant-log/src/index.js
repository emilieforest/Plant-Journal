import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';


// const domain = plantlog.us.auth0.com;
// const clientId = zmwdVyVqyiXuUqh8WjBR4gqMOCVTSTQs;

ReactDOM.render(
  <Auth0Provider
    domain="plantlog.us.auth0.com"
    clientId="zmwdVyVqyiXuUqh8WjBR4gqMOCVTSTQs"
    redirectUri="{window.location.origin}">
      <Router>
        <App />
      </Router>
  </Auth0Provider>,
  document.getElementById('root')
);

reportWebVitals();
