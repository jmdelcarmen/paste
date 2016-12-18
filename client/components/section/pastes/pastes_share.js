'use strict';

import React, { Component } from 'react';

class PasteShare extends Component {

  renderSharedWith() {
    return this.props.paste.sharedWith.map(person => <li className="collection-item">{person}</li>);
  }

  sharePaste(event) {
    event.preventDefault();
    if (this.refs.sharedWith.value !== '') {
      Meteor.call('paste.share', this.props.paste, this.refs.sharedWith.value, (err) => {
        if (err) {
          Bert.alert(err.reason, 'danger', 'fixed-top', 'fa-frown-o');
        }
        Bert.alert(`Paste shared with ${this.refs.sharedWith.value}`, 'info', 'fixed-top', 'fa-smile-o');
        this.refs.sharedWith.value = '';
      });
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
