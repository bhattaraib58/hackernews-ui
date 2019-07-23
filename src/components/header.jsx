import React, { Component } from 'react';
import Logo from '../assets/images/y18.gif';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="page-content">
          <div className="header clearfix">
            <div className="logo">
              <a href="/">
                <img src={Logo} alt="Hacker News" />
              </a>
            </div>
            <div className="logo-name">
              <a href="/top">Hacker News</a>
            </div>
            <ul className="links">
              <li>
                <a href="/new">new</a>
              </li>
              <li>
                <a href="/best">front</a>
              </li>
            </ul>
          </div>
        </div>

        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default Header;
