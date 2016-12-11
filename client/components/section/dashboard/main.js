'use strict';

import React, { Component } from 'react';
import PasteList from '../pastes/pastes_list';

class Dashboard extends Component {
  render() {
    return(
      <div>
        <h1>Dashboard</h1>
        <PasteList />
      </div>
    );
  }
}
export default Dashboard;
