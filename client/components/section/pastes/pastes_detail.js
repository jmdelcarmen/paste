'use strict';

import React, { Component } from 'react';
import PasteButtons from './paste_buttons/paste_buttons';


class PasteDetail extends Component {
  render() {
    return(
      <div>
        <div className="row">
          <div className="col s12 m5">
            <div className="card-panel blue lighten-1">
              <h4>Paste title</h4>
              <PasteButtons />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PasteDetail;
