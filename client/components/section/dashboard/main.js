'use strict';

import React, { Component } from 'react';
import PasteList from '../pastes/pastes_list';

import CreatePaste from './create_paste';

class Dashboard extends Component {
  render() {
    return(
      <div>
        <h1>Dashboard</h1>
        <CreatePaste />
        <PasteList />
      </div>
    );
  }
}
export default Dashboard;
