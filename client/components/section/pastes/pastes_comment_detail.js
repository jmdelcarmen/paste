'use strict';

import React, { Component } from 'react';

class PasteCommentDetail extends Component {
  render() {
    return (
      <div className="commentdetail-wrapper">
        <img src="https://cdn4.iconfinder.com/data/icons/linecon/512/photo-512.png"/>
        <div>
          <p>
            <span>{this.props.comment.commentBy}</span>
            <span>{this.props.comment.commentDate.toDateString()}</span>
          </p>
          <p>{this.props.comment.commentBody}</p>
        </div>
      </div>
    );
  }
}

export default PasteCommentDetail;
