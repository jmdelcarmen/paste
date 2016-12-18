'use strict';

import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class LoggedInNav extends Component {
  render() {
    return (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link onClick={this.props.logout.bind(this)} to="/logout">Logout</Link></li>
        <li className="push-x"><i className="material-icons">account_box</i></li>
      </ul>
    );
  }
};

export default LoggedInNav;
