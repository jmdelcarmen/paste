'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';
import { markdown } from 'markdown';

class PasteView extends Component {

  constructor(props) {
    super(props);

    this.state = { paste: {}, content: '' };
  }

  componentWillMount () {
    const { id } = this.props.params;
    Meteor.call('paste.view', id, (err, paste) => {
      if (err) {
        Materialize.toast(err.reason, 2000);
      }
      this.setState({paste: paste, content: markdown.toHTML(paste.content)});
    });
  }

  render() {
    const goBack = Meteor.userId() ? '/dashboard' : '/home';
    return (
      <div className="container">
        <Link className="btn btn-default" to={goBack}>Go back</Link>
        <div className="render-container" dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
      </div>
    );
  }
}

export default PasteView;
