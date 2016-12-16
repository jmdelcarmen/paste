'use strict';

import React, { Component } from 'react';

export default class PasteInfo extends Component {
  render() {
    return(
      <div className="row pasteinfo-wrapper">
        <div className="col l4 s12 m6 center-align">
          <i className="material-icons icon-large">question_answer</i>
          <h3>Hipster Ipsum</h3>
          <p>Godard crucifix subway tile craft beer cornhole la croixGodard crucifix subway tile craft beer cornhole la croix. Direct trade master cleanse normcore vinyl.</p>
        </div>
        <div className="col l4 s12 m6 center-align">
          <i className="material-icons icon-large">group</i>
          <h3>Hipster Ipsum</h3>
          <p>Godard crucifix subway tile craft beer cornhole la croixGodard crucifix subway tile craft beer cornhole la croix. Direct trade master cleanse normcore vinyl.</p>
        </div>
        <div className="col l4 s12 m6 center-align">
          <i className="material-icons icon-large">format_paint</i>
          <h3>Hipster Ipsum</h3>
          <p>Godard crucifix subway tile craft beer cornhole la croixGodard crucifix subway tile craft beer cornhole la croix. Direct trade master cleanse normcore vinyl.</p>
        </div>
      </div>
    );
  }
}
