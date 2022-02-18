import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = props => {
  const auth = useContext(AuthContext);
//Clickable links that take you too each different page.
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          ALL GROUPS
        </NavLink>
      </li>
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">LOGIN/SIGNUP</NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
