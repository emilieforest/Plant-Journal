import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './login-button';
import LogoutButton from './logout-button';
import AuthNav from './auth-nav';

const Nav = (props) => {
  const {isLoading} = useAuth0();
  if (isLoading) {
    return <div>loading</div>
  }
  return (
    <nav className="navbar navbar-expand-md">
    <a className="navbar-brand" href="/">Plant Pals</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/"><NavLink className="nav-link" exact to="/">Home</NavLink><span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><NavLink className="nav-link" to="/plants">Plants</NavLink></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><NavLink className="nav-link" to="/plants/graveyard">Graveyard</NavLink></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><NavLink className="nav-link" to="/plants/new">Add Plant</NavLink></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><NavLink className="nav-link" to="/profile">Profile</NavLink></a>
        </li>
      </ul>
        <AuthNav className="nav-item nav-button"/>
    </div>
  </nav>
  )
}

export default Nav;