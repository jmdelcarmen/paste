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
        Bert.alert(err.reason, 'danger', 'fixed-top', 'fa-frown-o');
      }
      this.setState({paste: paste, content: markdown.toHTML(paste.content)});
    });
  }

  render() {
    return (
      <div className="container">
        <Link className="btn btn-default" to='/home'>Home</Link>
        <div className="render-container #wrapper" dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
      </div>
    );
  }
}

export default PasteView;
