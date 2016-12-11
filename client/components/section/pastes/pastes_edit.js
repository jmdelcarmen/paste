'use strict';

import React, { Component } from 'react';

class PasteEdit extends Component {
  render() {
      console.log(this.props.params.id);
    return(
      <div className="row">
        <div className="col s6">Paste Editor</div>
        <div className="col s6">Paste Rendered</div>
      </div>
    );
  }
}

export default PasteEdit;
