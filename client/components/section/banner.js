'use strict';

import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return(
      <div className="banner-wrapper wrapper">
        <div>
          <h3>Hipster Ipsum </h3>
          <img className="responsive-img" src="https://static1.squarespace.com/static/54fe5d59e4b038fd96c9a7c5/550a1fa1e4b0fca40dc6f6b1/550a1fa1e4b03c7ec206969d/1426726818023/Placeholder+Logo.png"/>
          <div><i className="material-icons angle-down">keyboard_arrow_down</i></div>
        </div>
      </div>
    );
  }
}

export default Banner;
