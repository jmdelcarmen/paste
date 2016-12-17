'use strict';

import React, { Component } from 'react';
import PasteButtons from './paste_buttons/paste_buttons';
import { createContainer } from 'meteor/react-meteor-data';

class PasteDetail extends Component {
  render() {
    const { _id, ownerId, sharedWith, title, createdAt, desc } = this.props.paste;
    const owner = this.props.user ? this.props.user.emails[0].address : '';
    return(
      <div className="pastedetail-wrapper">
        <h4>{title}</h4>
        <span className="created-at">{createdAt.toDateString()}</span>
        <span className="owner">Paste by: {owner}</span>
        <p className="desc">{desc}</p>
        <PasteButtons id={_id} ownerId={ownerId} sharedWith={sharedWith}/>
      </div>
    );
  }
}

export default createContainer((props) => {
  Meteor.subscribe('userData');

  return { user: Meteor.users.findOne(props.paste.ownerId) };
}, PasteDetail);
