'use strict';

import React, { Component } from 'react';
import Banner from './banner';
import PasteList from './pastes/pastes_list';
import { createContainer } from 'meteor/react-meteor-data';
import { Pastes } from '../../../imports/collections/pastes';

class Home extends Component {
  render() {
    return(
      <div>
        <Banner />
        <PasteList pastes={this.props.pastes} />
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('public.pastes');

  return { pastes: Pastes.find({}).fetch() };
}, Home);
