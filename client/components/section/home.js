'use strict';

import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Pastes } from '../../../imports/collections/pastes';
import Banner from './banner';
import PasteList from './pastes/pastes_list';
import PasteInfo from './home_components/paste_info';

class Home extends Component {
  render() {
    return(
      <div className="home-wrapper wrapper">
        <Banner />
        <PasteInfo />
        <PasteList pastes={this.props.pastes} />
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('public.pastes');

  return { pastes: Pastes.find().fetch() };
}, Home);
