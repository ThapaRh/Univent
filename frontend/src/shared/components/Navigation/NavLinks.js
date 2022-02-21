import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';


const NavLinks = props => {
  //useContexts allows us to tap into a context to listen to it
  //navlinks will re-render whenever we change the context we created for login and logout
  const auth = useContext(AuthContext);
//Clickable links that take you too each different page.
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/u1/places">MY PLACES</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/places/new">ADD PLACE</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">LOGIN/SIGNUP</NavLink>
        </li>
      )}
      {auth.isLoggedIn && <li> <button onClick={auth.logout}>LOGOUT</button></li>}
    </ul>
  );
};

export default NavLinks;
