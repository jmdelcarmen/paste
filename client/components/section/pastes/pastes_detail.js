'use strict';

import React, { Component } from 'react';
import PasteButtons from './paste_buttons/paste_buttons';


class PasteDetail extends Component {
  render() {
    const { _id } = this.props.paste;
    return(
      <div className="col l4 m6 s12">
        <div className="card-panel blue lighten-1">
          <h4>Paste title</h4>
          <p>{_id}</p>
          <PasteButtons id={_id} />
        </div>
      </div>
    );
  }
}

export default PasteDetail;
