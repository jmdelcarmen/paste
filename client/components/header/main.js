'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return(
      <nav className="nav-styles">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Paste</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
