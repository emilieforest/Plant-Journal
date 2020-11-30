import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
      </ul>
    </nav>
  )
}

export default Nav;