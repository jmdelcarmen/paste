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
        <div className="text-center">
          <Link className="btn" to='/home'>Home</Link>
          <Link className="btn " to='/dashboard'>Dashboard</Link>
        </div>
        <div id="wrapper" className="render-container" dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
      </div>
    );
  }
}

export default PasteView;
