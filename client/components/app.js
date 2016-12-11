'use strict';

import React from 'react';
import Header from './header/main.js';
import Section from './section/main.js';
import Footer from './footer/main.js';

const App = (props) => {
  return (
    <div>
      <Header />
      <div className="container">{props.children}</div>
      <Footer />
    </div>
  );
}

export default App;
