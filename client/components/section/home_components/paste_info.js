'use strict';

import React, { Component } from 'react';

export default class PasteInfo extends Component {
  render() {
    return(
      <div className="row pasteinfo-wrapper">
        <div className="col l4 s12 m6 center-align">
          <i className="material-icons icon-large">question_answer</i>
          <h3>Collaborate</h3>
          <p>A place where groups can work on notes in a clean an simple way.</p>
        </div>
        <div className="col l4 s12 m6 center-align">
          <i className="material-icons icon-large">chrome_reader_mode</i>
          <h3>Live Preview</h3>
          <p>The live preview feature lets you automatically view the result of the current paste you are working with.</p>
        </div>
        <div className="col l4 s12 m6 center-align">
          <i className="material-icons icon-large">share</i>
          <h3>Discover</h3>
          <p>Discover new pastes from the public pastelist below.</p>
        </div>
      </div>
    );
  }
}
