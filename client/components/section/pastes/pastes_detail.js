'use strict';

import React, { Component } from 'react';
import PasteButtons from './paste_buttons/paste_buttons';
import { createContainer } from 'meteor/react-meteor-data';

class PasteDetail extends Component {


  constructor(props) {
    super(props);

    this.state = { user: {} }
  }


  render() {
    const { _id, ownerId, sharedWith, title, createdAt } = this.props.paste;
    return(
      <div className="col l4 m6 s12">
        <div className="card-panel blue lighten-1">
          <h4>{title}</h4>
          <p>Pasted at: {createdAt.toDateString()}</p>
          <p>Pasted by: {this.props.user[0].emails[0].address}</p>
          <PasteButtons id={_id} ownerId={ownerId} sharedWith={sharedWith}/>
        </div>
      </div>
    );
  }
}

export default createContainer((props) => {
  Meteor.subscribe('userData', props.paste.ownerId);

  return { user: Meteor.users.find().fetch()};
}, PasteDetail);
