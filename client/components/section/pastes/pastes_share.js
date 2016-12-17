'use strict';

import React, { Component } from 'react';

class PasteShare extends Component {

  renderSharedWith() {
    return this.props.paste.sharedWith.map(person => <button className="btn">{person}</button>);
  }

  sharePaste(event) {
    event.preventDefault();
    if (this.refs.sharedWith.value !== '') {
      Meteor.call('paste.share', this.props.paste, this.refs.sharedWith.value, (err) => {
        if (err) {
          Bert.alert(err.reason, 'danger', 'fixed-top', 'fa-frown-o');
        }
        this.refs.sharedWith.value = '';
      });
    }
  }

  render() {
    return(
      <div className="row">
        <div className="col l4 m8 s12">
          <form onSubmit={this.sharePaste.bind(this)}>
            <i className="material-icons prefix">account_circle</i>
            <label>First Name</label>
            <input ref="sharedWith" id="icon_prefix" type="text" className="validate" />
          </form>
        </div>
        <div className="col l8 m4 s12">
          {this.renderSharedWith()}
        </div>
      </div>
    );
  }
}

export default PasteShare;
