import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = props => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to='/cats'>Cats</NavLink></li>
        <li><NavLink to='/dogs'>Dogs</NavLink></li>
        <li><NavLink to='/falafels'>Falafels</NavLink></li>
      </ul>
    </nav>
  );
}

export default MainNav;
