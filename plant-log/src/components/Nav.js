import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Nav = (props) => {
  return (
    <nav class="navbar navbar-expand-md navbar-light bg-light">
    <a class="navbar-brand" href="/">Plant Log</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="/"><NavLink className="nav-link" exact to="/">Home</NavLink><span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><NavLink className="nav-link" to="/plants">Plants</NavLink></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><NavLink className="nav-link" to="/plants/graveyard">Graveyard</NavLink></a>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Nav;