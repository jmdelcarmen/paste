'use strict';

import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';
import { markdown } from 'markdown';
import PasteCommentList from './pastes_comment_list';
import PasteCommentForm from './pastes_comment_form';

class PasteView extends Component {

  constructor(props) {
    super(props);

    this.state = { paste: {}, content: '', comments: [] };
  }

  componentWillMount () {
    const { id } = this.props.params;
    Meteor.call('paste.view', id, (err, paste) => {
      if (err) {
        Bert.alert(err.reason, 'danger', 'fixed-top', 'fa-frown-o');
      }
      //set comments here
      this.setState({paste: paste, content: markdown.toHTML(paste.content), comments: paste.comments });
    });
  }

  renderCommentList() {
    if (this.state.comments.length > 0) {
      return <PasteCommentList comments={this.state.comments}/>;
    }
    return <div></div>;
  }

  render() {
    return (
      <ReactCSSTransitionGroup
          transitionName="view"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeOut={500}
          transitionLeaveTimeOut={300}>
      <div className="container">
        <div className="text-center">
          <Link className="btn" to='/home'>Back to Home</Link>
        </div>
        <div id="wrapper" className="render-container" dangerouslySetInnerHTML={{ __html: this.state.content }}></div>

        <div className="comments-wrapper">
          <h2>Comments</h2>
          <PasteCommentForm paste={this.state.paste}/>
          {this.renderCommentList()}
        </div>

      </div>

      </ReactCSSTransitionGroup>
    );
  }
}

export default PasteView;
