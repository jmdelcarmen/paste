'use strict';

import React, { Component } from 'react';

class PrivateButtons extends Component {
  render() {
    return(
      <div>
        <span>Created by: Username</span>
        <p>Private buttons</p>
        <button className="btn" onClick={this.props.viewPaste.bind(this)}>View</button>
      </div>
    );
  }
}

export default PrivateButtons;
