'use strict';

import React, { Component } from 'react';
import { browserHistory } from 'react-router';

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
    const buttons = Meteor.userId() === ownerId ? <PrivateButtons id={ id } viewPaste={this.viewPaste} /> : <PublicButtons id={ id } viewPaste={this.viewPaste} />;
    return(
      <div>
        {buttons}
      </div>
    );
  }
}

export default PasteButtons;
