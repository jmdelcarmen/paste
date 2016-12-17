'use strict';

import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class PrivateButtons extends Component {

  editPaste(event) {
    event.preventDefault();
    const { id } = this.props;
    browserHistory.push(`/paste/edit/${id}`);
  }

  removePaste(event) {
    event.preventDefault();
    const { id } = this.props;
    Meteor.call('paste.remove', id, (err) => {
      if (err) {
        Bert.alert(err.reason, 'danger', 'fixed-top', 'fa-frown-o');
      }
      else {
        browserHistory.push('/dashboard');
      }
    });
  }

  render() {
    return(
      <div>
        <button className="private-btn" onClick={this.props.viewPaste.bind(this)}>View</button>
        <button className="private-btn" onClick={this.editPaste.bind(this)}>Edit</button>
        <button className="private-btn" onClick={this.removePaste.bind(this)}>Delete</button>
      </div>
    );
  }
}

export default PrivateButtons;
