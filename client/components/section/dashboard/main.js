'use strict';

import React, { Component } from 'react';
import UserPastes from './user_pastes';
import CreatePaste from './create_paste';

class Dashboard extends Component {
  render() {
    return(
      <div>
        <h1>Dashboard</h1>
        <CreatePaste />
        <UserPastes />
      </div>
    );
  }
}
export default Dashboard;
