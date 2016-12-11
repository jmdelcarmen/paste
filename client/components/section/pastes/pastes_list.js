'use strict';

import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Pastes } from '../../../../imports/collections/pastes';

import PasteDetail from './pastes_detail';


class PasteList extends Component {
  render() {
    const pasteList = this.props.pastes.map(paste => {
      return <PasteDetail key={paste._id} paste={paste} />;
    });


    return(
      <div>
        <h2>PasteList</h2>
        {pasteList}
        <button className="btn-block btn">Load More</button>
      </div>
    );
  }
}

export default createContainer( () => {
  Meteor.subscribe('public.pastes');

  return { pastes: Pastes.find({}).fetch() };
}, PasteList);
