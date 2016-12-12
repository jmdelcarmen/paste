'use strict';

import React, { Component } from 'react';

class PublicButtons extends Component {


  render() {
    return(
      <div>
        <span>Created by: Username</span>
        <p>Public buttons</p>
        <p>
          <button className="btn" onClick={this.props.viewPaste.bind(this)}>View</button>
        </p>
      </div>
    );
  }
}

export default PublicButtons;
