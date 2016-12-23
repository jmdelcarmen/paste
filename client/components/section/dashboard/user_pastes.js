'use strict';

import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PasteDetail from '../pastes/pastes_detail';
import CreatePaste from './create_paste';



class UserPastes extends Component {
  render() {
    const pasteList = this.props.pastes.map(paste => <PasteDetail key={paste._id} paste={paste} />);
    return(
      <ReactCSSTransitionGroup
          transitionName="dashboard"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeOut={500}
          transitionLeaveTimeOut={300}>
      <div className="row pastelist-wrapper">
        <h2 className="pastelist-title"><span>Your Pastes</span></h2>
        <div className="createpaste-container"><CreatePaste /></div>
        <div className="row flex">{pasteList}</div>
      </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default UserPastes;
