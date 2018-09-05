import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header className="header">

    <nav>
      <ul className="our_links">
        <li ><Link className="inner_link" to='/about'>About</Link></li>
        <li ><Link className="inner_link name_link" to='home'>Jacob Duchen</Link></li>
        <li ><Link className="inner_link" to='/projects'>Projects</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header;
