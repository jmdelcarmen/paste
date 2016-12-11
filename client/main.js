'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/app';
import Section from './components/section/main.js';
import Footer from './components/footer/main.js';

import Register from './components/header/user/register';
import Login from './components/header/user/login';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='register' component={Register}/>
      <Route path='login' component={Login}/>
    </Route>
  </Router>
);



Meteor.startup(() => {
  render(routes, document.querySelector('.appContainer'));
});
