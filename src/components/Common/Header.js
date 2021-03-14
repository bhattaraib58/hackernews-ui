import React from 'react';
import { Link } from 'react-router-dom';

import Logo from 'assets/images/y18.gif';

/**
 * Header Component.
 *
 * @returns {Component}
 */
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
            <Link to="/best">best</Link>
          </li>
          <li>
            <Link to="/comments">comments</Link>
          </li>
          <li>
            <Link to="/ask">ask</Link>
          </li>
          <li>
            <Link to="/show">show</Link>
          </li>
          <li>
            <Link to="/jobs">jobs</Link>
          </li>
          <li>
            <Link to="/submit">submit</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
