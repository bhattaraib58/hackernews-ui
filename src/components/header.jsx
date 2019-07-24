import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/images/y18.gif';

function Header() {
  return (
    <div className="page-content">
      <div className="header clearfix">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Hacker News" />
          </Link>
        </div>
        <div className="logo-name">
          <Link to="/top">Hacker News</Link>
        </div>
        <ul className="links">
          <li>
            <Link to="/new">new</Link>
          </li>
          <li>
            <Link to="/best">past</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
