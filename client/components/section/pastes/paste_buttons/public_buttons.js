'use strict';

import React, { Component } from 'react';

class PublicButtons extends Component {
  render() {
    return(
        <button className="public-btn" onClick={this.props.viewPaste.bind(this)}>View</button>
    );
  }
}

export default PublicButtons;
