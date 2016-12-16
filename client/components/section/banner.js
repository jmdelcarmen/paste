'use strict';

import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return(
      <div className="banner-wrapper wrapper">
        <div>
          <img className="responsive-img" src="https://static1.squarespace.com/static/54fe5d59e4b038fd96c9a7c5/550a1fa1e4b0fca40dc6f6b1/550a1fa1e4b03c7ec206969d/1426726818023/Placeholder+Logo.png"/>
        </div>
        <h1>Paste</h1>
      </div>
    );
  }
}

export default Banner;
