'use strict';

import React, { Component } from 'react';

class PasteShare extends Component {

  constructor(props) {
    super(props);

    this.state = { sharedWith: [] };
  }

  componenWillMount() {
    this.props.paste.sharedWith ? this.setState({ sharedWith: this.this.props.paste.sharedWith }) : [];
  }

  sharePaste(event) {
    event.preventDefault();
    console.log('hi');
  }

  render() {
    // const sharedWith = this.props.paste.sharedWith ? this.props.paste.sharedWith : [];
    // console.log(sharedWith);
    return(
      <div className="row">
        <div className="col l4 m8 s12">
          <form onSubmit={this.sharePaste.bind(this)}>
            <i className="material-icons prefix">account_circle</i>
            <input id="icon_prefix" type="text" className="validate" />
            <label>First Name</label>
          </form>
        </div>
        <div className="col l8 m4 s12">
          {this.state.sharedWith.map(person => <button>{person}</button>)}
        </div>
      </div>
    );
  }
}

export default PasteShare;
