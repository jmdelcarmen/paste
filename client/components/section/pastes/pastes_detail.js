'use strict';

import React, { Component } from 'react';
import PasteButtons from './paste_buttons/paste_buttons';
import { createContainer } from 'meteor/react-meteor-data';

class PasteDetail extends Component {
  render() {
    const { _id, ownerId, sharedWith, title, createdAt } = this.props.paste;
    const owner = this.props.user.emails[0].address;
    return(
      <div className="col l4 m6 s12">
        <div className="card-panel blue lighten-1">
          <h4>{title}</h4>
          <p>Pasted at: {createdAt.toDateString()}</p>
          <p>Pasted by: {owner}</p>
          <PasteButtons id={_id} ownerId={ownerId} sharedWith={sharedWith}/>
        </div>
      </div>
    );
  }
}

export default createContainer((props) => {
  Meteor.subscribe('userData');

  return { user: Meteor.users.findOne(props.paste.ownerId) };
}, PasteDetail);
