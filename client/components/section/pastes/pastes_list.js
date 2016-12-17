'use strict';

import React, { Component } from 'react';
import PasteDetail from './pastes_detail';

class PasteList extends Component {
  render() {
    const pasteList = this.props.pastes.map(paste => <PasteDetail key={paste._id} paste={paste} />);
    return(
      <div className="row pastelist-wrapper">
        <h2 className="pastelist-title"><span>Public Pastes</span></h2>
        <div className="row flex container">{pasteList}</div>
      </div>
    );
  }
}

export default PasteList;
