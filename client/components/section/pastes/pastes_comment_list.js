'use strict';

import React, { Component } from 'react';
import PasteCommentDetail from './pastes_comment_detail';

class PasteCommentList extends Component {

  renderCommentList() {
    return this.props.comments.map(comment => <PasteCommentDetail key={comment.commentDate} comment={comment}/> );
  }


  render() {
    return (
      <div>
        {this.renderCommentList()}
      </div>
    );
  }
}

export default PasteCommentList;
