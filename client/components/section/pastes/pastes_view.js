'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

class PasteView extends Component {

  constructor(props) {
    super(props);

    this.state = { paste: {} };
  }

  componentWillMount () {
    const { id } = this.props.params;
    Meteor.call('paste.view', id, (err, paste) => {
      if (err) {
        Materialize.toast(err.reason, 2000);
      }
      this.setState({paste: paste});
    });
  }

  render() {
    const goBack = Meteor.userId() ? '/dashboard' : '/home';
    console.log(this.state.paste);
    return (
      <div>
        <Link className="btn btn-default" to={goBack}>Go back</Link>
        <h1>{this.state.paste._id}</h1>
      </div>
    );
  }
}

export default PasteView;
