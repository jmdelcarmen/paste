'use strict';

import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';


class Header extends Component {

  componentWillMount() {
    if(!Meteor.userId()) {
      browserHistory.push('/login');
    }
  }
  render() {
    return(
      <nav className="nav-styles">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Paste</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
