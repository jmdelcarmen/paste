'use strict';

import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Login extends Component {
  componentWillMount() {
    if(Meteor.userId()) {
      browserHistory.push('/');
    }
  }

  onSubmit(event) {
    event.preventDefault();

    const refs = this.refs;
    const email = refs.email.value;
    const password = refs.password.value;

    if (email !== '' && password !== '') {
      Meteor.loginWithPassword(email, password, (err) => {
        if (err) {
          Materialize.toast(err.reason, 2000);
        }
        else {
          browserHistory.push('/')
        }
      })
    }
    else {
      Materialize.toast('Enter email and password.', 2000);
    }
  }

  render() {
    return(
      <div className="row">
        <h4 className="text-center">Login</h4>
        <form onSubmit={this.onSubmit.bind(this)} className="col offset-s4 s4">
          <div className="row">
            <div className="input-field col s12">
              <input ref="email" id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input ref="password" id="password" type="password" className="validate" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <button className="waves-effect waves-light btn btn-block">Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
