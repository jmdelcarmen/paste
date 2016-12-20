'use strict';

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import UserPastes from './user_pastes';
import { createContainer } from 'meteor/react-meteor-data';
import { Pastes } from '../../../../imports/collections/pastes';

class Dashboard extends Component {
  componentWillMount() {
    const path = Meteor.userId() ? '/dashboard' : '/home';

    browserHistory.push(path);
  }

  render() {
    return(
      <div>
        <UserPastes pastes={this.props.pastes.reverse()} />
      </div>
    );
  }
}
export default createContainer( () => {
  Meteor.subscribe('public.pastes');

  return { pastes: Pastes.find({ownerId: Meteor.userId()}).fetch() };
}, Dashboard);
