import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer clearfix">
      <div className="footer-line" />

      <ul className="footer-links">
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

      <form action="#" className="user-form">
        <label>Search:</label>
        <input type="text" />
      </form>
    </div>
  );
}

export default Footer;
