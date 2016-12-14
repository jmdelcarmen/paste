'use strict';

import React, { Component } from 'react';

class PasteShare extends Component {

  constructor(props) {
    super(props);

    this.state = { sharedWith: [] };
  }

  componenWillMount() {
    this.setState({ sharedWith: this.props.paste.sharedWith });
  }

  renderSharedWith () {
    return this.state.sharedWith.map(person => <button className="btn">{person}</button>);
  }

  sharePaste(event) {
    event.preventDefault();
    if (this.refs.sharedWith.value !== '') {
      Meteor.call('paste.share', this.props.paste, this.refs.sharedWith.value, (err) => {
        if (err) {
          Materialize.toast(err.reason, 2000);
        }
        this.setState({ sharedWith: this.props.paste.sharedWith });
      });
    }
    this.setState({ sharedWith: this.props.paste.sharedWith });
    this.refs.sharedWith.value = '';
  }

  render() {
    // const sharedWith = this.props.paste.sharedWith ? this.props.paste.sharedWith : [];
    // console.log(sharedWith);
    return(
      <div className="row">
        <div className="col l4 m8 s12">
          <form onSubmit={this.sharePaste.bind(this)}>
            <i className="material-icons prefix">account_circle</i>
            <input ref="sharedWith" id="icon_prefix" type="text" className="validate" />
            <label>First Name</label>
          </form>
        </div>
        <div className="col l8 m4 s12">
          <button className="btn btn-default" onClick={this.sharePaste.bind(this)}>View Contributors</button>
          {this.renderSharedWith()}
        </div>
      </div>
    );
  }
}

export default PasteShare;
