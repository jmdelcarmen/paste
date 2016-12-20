'use strict';

import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Pastes } from '../../../imports/collections/pastes';
import Banner from './banner';
import PasteList from './pastes/pastes_list';
import PasteInfo from './home_components/paste_info';

class Home extends Component {
  render() {
    const pastes = this.props.pastes ? this.props.pastes : '';
    return(
      <div className="home-wrapper wrapper">
        <Banner />
        <PasteInfo />
        <PasteList pastes={pastes.reverse()} />
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('public.pastes');

  return { pastes: Pastes.find({title: /[a-z]/ig}).fetch() };
}, Home);
