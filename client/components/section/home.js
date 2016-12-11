'use strict';

import React, { Component } from 'react';
import Banner from './banner';
import PasteList from './pastes/pastes_list';

class Home extends Component {
  render() {
    return(
      <div>
        <Banner />
        <PasteList />
      </div>
    );
  }
}

export default Home;
