'use strict';

import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class LoggedOutNav extends Component {
  render() {
    return (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    );
  }
};

export default LoggedOutNav;
