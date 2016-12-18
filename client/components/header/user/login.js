'use strict';

import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Login extends Component {

  componentWillMount() {
    if(Meteor.userId()) {
      browserHistory.push('/home');
    }
  }

  login(event) {
    event.preventDefault();

    const refs = this.refs;
    const email = refs.email.value;
    const password = refs.password.value;

    if (email !== '' && password !== '') {
      Meteor.loginWithPassword(email, password, (err) => {
        if (err) {
          Bert.alert(err.reason, 'danger', 'fixed-top', 'fa-frown-o');
        }
        else {
          Bert.alert(`Welcome ${email}`, 'success', 'fixed-top', 'fa-smile-o');
          browserHistory.push('/home')
        }
      });
    }
    else {
      Bert.alert('Enter email and password.', 'danger', 'fixed-top', 'fa-frown-o');
    }
  }

  render() {
    return(
      <div className="row login-wrapper">
        <h4 className="text-center">Login</h4>
        <form onSubmit={this.login.bind(this)} className="col offset-s4 s4 login-form">
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
