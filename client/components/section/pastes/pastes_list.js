'use strict';

import React, { Component } from 'react';

import PasteDetail from './pastes_detail';

class PasteList extends Component {
  render() {
    return(
      <div>
        <h2>PasteList</h2>
        <PasteDetail />
        <PasteDetail />
        <PasteDetail />
        <PasteDetail />
        <PasteDetail />
        <button className="btn-block btn">Load More</button>
      </div>
    );
  }
}

export default PasteList;
