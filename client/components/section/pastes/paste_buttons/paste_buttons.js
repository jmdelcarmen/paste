'use strict';

import React, { Component } from 'react';

import PublicButtons from './public_buttons';
import PrivateButtons from './private_buttons';


class PasteButtons extends Component {

  render() {
    //if user buttons
    const buttons = Meteor.userId() ? <PrivateButtons /> : <PublicButtons />;

    return(
      <div>
        {buttons}
      </div>
    );
  }
}

export default PasteButtons;
