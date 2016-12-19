'use strict';

import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class LoggedInNav extends Component {
  render() {
    return (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      <ul id="dropdown1" className="dropdown-content">
        <li><a href="#!">Item 1</a></li>
        <li><a href="#!">Item 2</a></li>
        <li><a href="#!">Item 3</a></li>
      </ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link onClick={this.props.logout.bind(this)} to="/logout">Logout</Link></li>
        <li><a className="dropdown-button" href="#!" data-activates="dropdown1"><i className="material-icons right">account_box</i></a></li>
      </ul>
    );
  }
};

export default LoggedInNav;
