import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <NavLink exact to="/">
      Home
    </NavLink>
    {' '}
    <NavLink to="/messages">
      Messages
    </NavLink>
  </div>
);

export default Header;
