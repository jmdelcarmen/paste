'use strict';

import React, { Component } from 'react';
import PasteDetail from '../pastes/pastes_detail';


class UserPastes extends Component {
  render() {
    const pasteList = this.props.pastes.map(paste => {
      return <PasteDetail key={paste._id} paste={paste} />;
    });
    return(
      <div className="row">
        <h2>PasteList</h2>
        <div className="row">{pasteList}</div>
        <button className="btn-block btn">Load More</button>
      </div>
    );
  }
}

export default UserPastes;
