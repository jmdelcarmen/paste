'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router';

import App from './components/app';
import Section from './components/section/main.js';
import Footer from './components/footer/main.js';
import Home from './components/section/home';
import Dashboard from './components/section/dashboard/main';
import Register from './components/header/user/register';
import Login from './components/header/user/login';
import PasteEdit from './components/section/pastes/pastes_edit';
import PasteView from './components/section/pastes/pastes_view';

const routes = (
  <Router history={browserHistory}>
    <Route path='/paste/view/:id' component={PasteView}/>
    <Route path='/' component={App}>
      <Route path='home' component={Home} />
      <Route path='register' component={Register} />
      <Route path='login' component={Login} />
      <Route path='logout' component={App} />
      <Route path='dashboard' component={Dashboard} />
      <Route path='paste/edit/:id' component={PasteEdit} />
    </Route>
  </Router>
);



Meteor.startup(() => {
  render(routes, document.querySelector('.appContainer'));
});
