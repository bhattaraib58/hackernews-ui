import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

/**
 * Footer Component.
 *
 * @returns {Component}
 */
function Footer() {
  return (
    <div className="pt-10 pb-20">
      <div className={styles.lineBreak} />

      <div className="center mt-20 mb-20">
        <ul className={`align-center ${styles.links}`}>
          <li>
            <Link to="/guidelines">Guidelines</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
          <li>
            <Link to="/api">API</Link>
          </li>
          <li>
            <Link to="/security">Security</Link>
          </li>
          <li>
            <Link to="/lists">Lists</Link>
          </li>
          <li>
            <Link to="/bookmarklet">Bookmarklet</Link>
          </li>
          <li>
            <Link to="/legal">Legal</Link>
          </li>
          <li>
            <Link to="/apply">Apply to YC</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <form action="#" className={styles.searchContainer}>
        <label>Search:</label>
        <input type="text" />
      </form>
    </div>
  );
}

export default Footer;
