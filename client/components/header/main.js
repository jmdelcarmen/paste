'use strict';

import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

import LoggedOutNav from './user/loggedOutNav';
import LoggedInNav from './user/loggedInNav';


class Header extends Component {

  logout(event) {
    event.preventDefault();
    Meteor.logout(function (err) {
      if (err) {
        return Bert.alert(err.reason, 'danger', 'fixed-top', 'fa-frown-o');
      }
      else {
        browserHistory.push('/home');
      }
    });
  }

  render() {
    //if user
    const navOptions = Meteor.userId() ? <LoggedInNav logout={this.logout} /> : <LoggedOutNav />;
    return(
      <nav className="mainnav-wrapper">
        <div className="nav-wrapper container">
          <Link to="/home" className="brand-logo">Paste</Link>
          {navOptions}
        </div>
      </nav>
    );
  }
}

export default Header;
