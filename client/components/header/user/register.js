'use strict';

import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Register extends Component {
  componentWillMount() {
    if(Meteor.userId()) {
      browserHistory.push('/');
    }
  }

  //submit form
  onSubmit(event) {
    event.preventDefault();
    //get form values using refs
    const refs = this.refs;
    const email = refs.email.value;
    const password = refs.password.value;
    const confirm_password = refs.confirm_password.value;

    if (password === confirm_password && password !== '' && confirm_password !== '') {
      const User = {
        email,
        password
      }
      //meteor method for creating new users
      Accounts.createUser(User, (err) => {
        if (err) {
          Materialize.toast('There was an error creating your account.', 2000);
        }
        else {
          browserHistory.push('/');
        }
      }); //create user
    }
    else {
      Materialize.toast('Your passwords don\'t match', 2000);
    } //password confirmation
  }//onSubmit

  render() {
    return(
      <div className="row">
        <h4 className="text-center">Register Account</h4>
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
            <div className="input-field col s12">
              <input ref="confirm_password" id="confirm_password" type="password" className="validate" />
              <label htmlFor="confirm_password">Confirm Password</label>
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

export default Register;
