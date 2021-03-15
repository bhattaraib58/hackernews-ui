import React from 'react';
import { Link } from 'react-router-dom';

import ROUTES from 'constants/routes';
import Logo from 'assets/images/Logo.gif';

import styles from './Header.module.css';

/**
 * Header Component.
 *
 * @returns {Component}
 */
function Header() {
  return (
    <div className={`align-center ${styles.container}`}>
      <div className="align-center mr-10">
        <div className={styles.logo}>
          <Link to={ROUTES.HOME}>
            <img src={Logo} alt="Hacker News" />
          </Link>
        </div>

        <div className={styles.siteName}>
          <Link to="/top">Hacker News</Link>
        </div>
      </div>

      <ul className={`align-center ${styles.links}`}>
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
  );
}

export default Header;
