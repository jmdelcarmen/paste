'use strict';

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

import PublicButtons from './public_buttons';
import PrivateButtons from './private_buttons';


class PasteButtons extends Component {

  viewPaste(event) {
    event.preventDefault();
    const { id } = this.props;
    Meteor.call('paste.view', id, (err, paste) => {
      if (err) {
        Materialize.toast(err.reason, 2000);
      }
      else {
        browserHistory.push(`/paste/view/${paste._id}`);
      }
    });
  }

  render() {
    const { id, ownerId, sharedWith } = this.props;
    //if user buttons
    let buttons;
    if (Meteor.userId() ) {
      buttons = Meteor.userId() === ownerId || sharedWith.indexOf(this.props.user.emails[0].address) !== -1 ? <PrivateButtons id={ id } viewPaste={this.viewPaste} /> : <PublicButtons id={ id } viewPaste={this.viewPaste} />;
    } else {
      buttons = <PublicButtons id={ id } viewPaste={this.viewPaste} />;
    }

    return(
      <div>
        {buttons}
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('userData');

    return { user: Meteor.users.findOne(Meteor.userId()) };
}, PasteButtons);
