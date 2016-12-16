'use strict';

import React, { Component } from 'react';
import PasteDetail from './pastes_detail';


class PasteList extends Component {
  render() {
    const pasteList = this.props.pastes.map(paste => <PasteDetail key={paste._id} paste={paste} />);
    return(
      <div className="row">
        <h2>PasteList</h2>
        <div className="row">{pasteList}</div>
        <button className="btn-block btn">Load More</button>
      </div>
    );
  }
}

export default PasteList;
