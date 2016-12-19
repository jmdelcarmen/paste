'use strict';

import React, { Component } from 'react';

class PasteShare extends Component {

  renderSharedWith() {
    const paste = this.props.paste;
    if (paste) {
      return paste.sharedWith.map(person => <li className="collection-item">{person}</li>);
    } else {
      return;
    }
  }

  sharePaste(event) {
    event.preventDefault();
    let shareEmail = this.refs.sharedWith.value;
    const paste = this.props.paste;
    if (shareEmail !== '' && paste.sharedWith.indexOf(shareEmail) ) {
      Meteor.call('paste.share', paste, shareEmail, (err) => {
        if (err) {
          Bert.alert(err.reason, 'danger', 'fixed-top', 'fa-frown-o');
        }
        Bert.alert(`Paste shared with ${shareEmail}`, 'success', 'fixed-top', 'fa-smile-o');
        shareEmail = '';
      });
    }
    else {
      Bert.alert(`This paste is already shared with ${shareEmail}`, 'info', 'fixed-top', 'fa-smile-o');
    }
  }

  render() {
    return(
      <div className="row pasteshare-wrapper">
        <div className="col l8 m6 s12">
          <form onSubmit={this.sharePaste.bind(this)}>
            <label>Add contributors to this paste <i className="fa-share-alt fa"></i></label>
            <input ref="sharedWith" id="icon_prefix" type="email" className="validate" />
          </form>
        </div>
        <div className="col l4 m6 s12">
          <ul className="collection with-header">
            <li className="collection-header"><h4>Contributors</h4></li>
            {this.renderSharedWith()}
          </ul>
        </div>
      </div>
    );
  }
}

export default PasteShare;
