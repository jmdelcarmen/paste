'use strict';

import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class CreatePaste extends Component {

  createPaste(event) {
    event.preventDefault();
    Meteor.call('paste.create', (err, pasteId) => {
      browserHistory.push(`/paste/edit/${pasteId}`);
    });
  }


  render() {
    return(
      <button onClick={this.createPaste.bind(this)}className="createpaste-button">Create Paste<i className="material-icons create-icon">mode_edit</i></button>
    );
  }
}

export default CreatePaste;
