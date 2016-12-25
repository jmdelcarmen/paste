'use strict';

import React, { Component } from 'react';

class PasteCommentDetail extends Component {
  render() {
    return (
      <div>{this.props.comment}</div>
    );
  }
}

export default PasteCommentDetail;
