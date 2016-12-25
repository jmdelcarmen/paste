'use strict';

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

class PasteCommentForm extends Component {

  addComment(event) {
    event.preventDefault();
    console.log(this.refs.commentBody.value);
    if (Meteor.userId()) {
      const commentBy = this.props.user ? this.props.user.emails[0].address : '';
      const comment = {
        commentDate: new Date(),
        commentBody: this.refs.commentBody.value,
        commentUps: 0,
        commentDowns: 0,
        commentBy
      };

      Meteor.call('paste.addComment', this.props.paste._id, comment, (err) => {
        if (err) {
          Bert.alert(err.reason, 'danger', 'fixed-top', 'fa-frown-o');
        }
        Bert.alert('Comment Added', 'success', 'fixed-top', 'fa-smile-o');
        this.refs.commentBody.value = '';
      });
    }
    else {
      Bert.alert("You must be logged in.", 'danger', 'fixed-top', 'fa-frown-o');
      browserHistory.push('/login');
    }
  } //add comment

  render() {
    return(
      <form onSubmit={this.addComment.bind(this)}>
        <img src="https://cdn4.iconfinder.com/data/icons/linecon/512/photo-512.png"/>
        <textarea ref="commentBody" placeholder="Join the discussion..." />
        <button className="btn">Add Comment</button>
      </form>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('userData');

  return { user: Meteor.users.findOne(Meteor.userId()) };
}, PasteCommentForm);
