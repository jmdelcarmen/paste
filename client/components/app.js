'use strict';

import React, { Component } from 'react';
import Header from './header/main.js';
import Section from './section/main.js';
import Footer from './footer/main.js';
import { browserHistory } from 'react-router';

class App extends Component {

  componentWillMount() {
    browserHistory.push('/home');
  }

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Header />
        <div className="container">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default App;
