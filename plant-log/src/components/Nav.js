import React from 'react';
import { NavLink } from 'react-router-dom';

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
      </ul>
    </div>
  </nav>
  )
}

export default Nav;